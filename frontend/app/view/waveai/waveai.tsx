// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { Button } from "@/app/element/button";
import { WorkspaceLayoutModel } from "@/app/workspace/workspace-layout-model";
import i18n from "@/util/i18n/i18n";
import { atom } from "jotai";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export class WaveAiModel implements ViewModel {
    viewType = "waveai";
    viewIcon = atom("sparkles");
    viewName = atom(i18n.t("waveAiLegacy.viewName"));
    noPadding = atom(true);
    viewComponent = WaveAiDeprecatedView;

    constructor(_: ViewModelInitType) {}
}

function WaveAiDeprecatedView() {
    const { t } = useTranslation();
    const handleOpenAIPanel = useCallback(() => {
        WorkspaceLayoutModel.getInstance().setAIPanelVisible(true);
    }, []);

    return (
        <div className="flex h-full w-full flex-col px-6 text-center">
            <div className="flex-[4]" />
            <div className="mx-auto flex w-full max-w-[760px] flex-col items-center">
                <h2 className="text-xl font-semibold text-primary">{t("waveAiLegacy.noLongerSupported")}</h2>
                <p className="mt-3 text-sm leading-6 text-secondary">{t("waveAiLegacy.retiredMessage")}</p>
                <Button className="mt-6 cursor-pointer" onClick={handleOpenAIPanel}>
                    {t("waveAiLegacy.openPanel")}
                </Button>
            </div>
            <div className="flex-[6]" />
        </div>
    );
}
