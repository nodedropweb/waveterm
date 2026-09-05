// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { WaveAIModel } from "@/app/aipanel/waveai-model";
import { BuilderAppPanelModel } from "@/builder/store/builder-apppanel-model";
import { BuilderBuildPanelModel } from "@/builder/store/builder-buildpanel-model";
import { atoms } from "@/store/global";
import { useAtomValue } from "jotai";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

const EmptyStateView = memo(() => {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6 max-w-[500px] text-center px-8">
                <div className="text-6xl">🏗️</div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-primary">{t("builderPreview.noAppToPreview")}</h2>
                    <p className="text-base text-secondary leading-relaxed">{t("builderPreview.noAppIntro")}</p>
                </div>
                <div className="text-base text-secondary mt-2">
                    {t("builderPreview.appWillAppearPrefix")} <span className="font-mono">app.go</span>{" "}
                    {t("builderPreview.appWillAppearSuffix")}
                </div>
            </div>
        </div>
    );
});

EmptyStateView.displayName = "EmptyStateView";

const ErrorStateView = memo(({ errorMsg }: { errorMsg: string }) => {
    const { t } = useTranslation();
    const displayMsg = errorMsg && errorMsg.trim() ? errorMsg : t("builderPreview.unknownError");
    const waveAIModel = WaveAIModel.getInstance();
    const buildPanelModel = BuilderBuildPanelModel.getInstance();
    const appPanelModel = BuilderAppPanelModel.getInstance();
    const outputLines = useAtomValue(buildPanelModel.outputLines);
    const isStreaming = useAtomValue(waveAIModel.isAIStreaming);

    const isSecretError = displayMsg.includes("ERR-SECRET");

    const getBuildContext = () => {
        const filteredLines = outputLines.filter((line) => !line.startsWith("[debug]"));
        const buildOutput = filteredLines.join("\n").trim();
        return t("builderPreview.buildContext", { error: displayMsg, output: buildOutput });
    };

    const handleAddToContext = () => {
        const context = getBuildContext();
        waveAIModel.appendText(context, true);
        waveAIModel.focusInput();
    };

    const handleAskAIToFix = async () => {
        const context = getBuildContext();
        waveAIModel.appendText(t("builderPreview.askAiToFixPrefix") + "\n\n" + context, true);
        await waveAIModel.handleSubmit();
    };

    const handleGoToSecrets = () => {
        appPanelModel.setActiveTab("secrets");
    };

    if (isSecretError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-background">
                <div className="flex flex-col items-center gap-6 max-w-2xl text-center px-8">
                    <div className="text-6xl">🔐</div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold text-error">{t("builderPreview.secretsRequiredTitle")}</h2>
                        <p className="text-base text-secondary leading-relaxed">
                            {t("builderPreview.secretsRequiredBody")}
                        </p>
                        <div className="text-left bg-panel border border-error/30 rounded-lg p-4 max-h-96 overflow-auto mt-2">
                            <pre className="text-sm text-secondary whitespace-pre-wrap font-mono">{displayMsg}</pre>
                        </div>
                        <button
                            onClick={handleGoToSecrets}
                            className="px-6 py-2 mt-2 bg-accent/80 text-primary font-semibold rounded hover:bg-accent transition-colors cursor-pointer"
                        >
                            {t("builderPreview.goToSecretsTab")}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6 max-w-2xl text-center px-8">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-error">{t("builderPreview.buildErrorTitle")}</h2>
                    <div className="text-left bg-panel border border-error/30 rounded-lg p-4 max-h-96 overflow-auto">
                        <pre className="text-sm text-secondary whitespace-pre-wrap font-mono">{displayMsg}</pre>
                    </div>
                    {!isStreaming && (
                        <div className="flex gap-3 mt-2 justify-center">
                            <button
                                onClick={handleAddToContext}
                                className="px-4 py-2 bg-panel text-primary border border-border rounded hover:bg-panel/80 transition-colors cursor-pointer"
                            >
                                {t("builderPreview.addErrorToAiContext")}
                            </button>
                            <button
                                onClick={handleAskAIToFix}
                                className="px-4 py-2 bg-accent/80 text-primary font-semibold rounded hover:bg-accent transition-colors cursor-pointer"
                            >
                                {t("builderPreview.askAiToFix")}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

ErrorStateView.displayName = "ErrorStateView";

const BuildingStateView = memo(() => {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6 max-w-[500px] text-center px-8">
                <div className="text-6xl">⚙️</div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-primary">{t("builderPreview.buildingTitle")}</h2>
                    <p className="text-base text-secondary leading-relaxed">{t("builderPreview.buildingBody")}</p>
                </div>
            </div>
        </div>
    );
});

BuildingStateView.displayName = "BuildingStateView";

const StoppedStateView = memo(({ onStart }: { onStart: () => void }) => {
    const { t } = useTranslation();
    const [isStarting, setIsStarting] = useState(false);

    const handleStart = () => {
        setIsStarting(true);
        onStart();
        setTimeout(() => setIsStarting(false), 2000);
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6 max-w-[500px] text-center px-8">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-primary">{t("builderPreview.notRunningTitle")}</h2>
                    <p className="text-base text-secondary leading-relaxed">{t("builderPreview.notRunningBody")}</p>
                </div>
                {!isStarting && (
                    <button
                        onClick={handleStart}
                        className="px-6 py-2 bg-accent text-primary font-semibold rounded hover:bg-accent/80 transition-colors cursor-pointer"
                    >
                        {t("builderPreview.startApp")}
                    </button>
                )}
                {isStarting && <div className="text-base text-success">{t("builderPreview.starting")}</div>}
            </div>
        </div>
    );
});

StoppedStateView.displayName = "StoppedStateView";

const BuilderPreviewTab = memo(() => {
    const model = BuilderAppPanelModel.getInstance();
    const isLoading = useAtomValue(model.isLoadingAtom);
    const originalContent = useAtomValue(model.originalContentAtom);
    const builderStatus = useAtomValue(model.builderStatusAtom);
    const builderId = useAtomValue(atoms.builderId);
    const fileExists = originalContent.length > 0;
    const [lastKnownUrl, setLastKnownUrl] = useState<string>(null);

    const status = builderStatus?.status || "init";
    const isWebViewActive = status === "running" && builderStatus?.port && builderStatus.port !== 0;

    if (isWebViewActive) {
        const previewUrl = `http://localhost:${builderStatus.port}/?clientid=wave:${builderId}`;
        if (previewUrl !== lastKnownUrl) {
            setLastKnownUrl(previewUrl);
        }
    }

    let overlay = null;
    if (!isLoading && !isWebViewActive) {
        if (builderStatus?.status === "error") {
            overlay = <ErrorStateView errorMsg={builderStatus?.errormsg || ""} />;
        } else if (!fileExists || status === "init") {
            overlay = <EmptyStateView />;
        } else if (status === "building") {
            overlay = <BuildingStateView />;
        } else if (status === "stopped") {
            overlay = <StoppedStateView onStart={() => model.startBuilder()} />;
        }
    }

    return (
        <div className="w-full h-full relative">
            {lastKnownUrl && (
                <webview
                    ref={model.webviewRef}
                    src={lastKnownUrl}
                    className="w-full h-full"
                    style={{
                        visibility: isWebViewActive ? "visible" : "hidden",
                        pointerEvents: isWebViewActive ? "auto" : "none",
                    }}
                />
            )}
            {overlay && <div className="absolute inset-0">{overlay}</div>}
        </div>
    );
});

BuilderPreviewTab.displayName = "BuilderPreviewTab";

export { BuilderPreviewTab };
