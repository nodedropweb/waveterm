// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useWaveEnv } from "@/app/waveenv/waveenv";
import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_14_0_Content = () => {
    const waveEnv = useWaveEnv();
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start w-full mb-2 unselectable">
            <div className="text-secondary leading-relaxed mb-4">
                <p className="mb-0">{t("onboardingUpgrade.v0140.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-sky-500 fa-sharp fa-solid fa-shield"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0140.durableSectionTitle")}{" "}
                        <button
                            onClick={() => waveEnv.electron.openExternal("https://docs.waveterm.dev/durable-sessions")}
                            className="text-accent text-sm font-normal cursor-pointer hover:underline"
                        >
                            {t("onboardingUpgrade.v0140.seeDocs")}
                        </button>
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.sessionProtectionLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.sessionProtectionBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.visualStatusLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.visualStatusBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.flexibleConfigLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.flexibleConfigBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-network-wired"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0140.connectionMonitoringSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.keepalivesLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.keepalivesBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.stalledDetectionLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.stalledDetectionBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-sparkles"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0140.aiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.imageSupportLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.imageSupportBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.stopGenerationLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.stopGenerationBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.autoScrollLabel")}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-terminal"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0140.terminalSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.contextMenuLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.contextMenuBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0140.osc52Label")}</strong> -{" "}
                                {t("onboardingUpgrade.v0140.osc52Body")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_14_0_Content.displayName = "UpgradeOnboardingModal_v0_14_0_Content";

export { UpgradeOnboardingModal_v0_14_0_Content };
