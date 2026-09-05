// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_13_0_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0130.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-sparkles"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0130.localAiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.openaiCompatLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.openaiCompatBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.geminiLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.geminiBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.presetsLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.presetsBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.multiModeLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.multiModeBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-sliders"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0130.configSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.newConfigLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.newConfigBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.betterOrgLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.betterOrgBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.integratedSecretsLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.integratedSecretsBody")}
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
                        {t("onboardingUpgrade.v0130.terminalSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.bracketedPasteLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.bracketedPasteBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.windowsPasteLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.windowsPasteBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0130.sshPasswordLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0130.sshPasswordBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_13_0_Content.displayName = "UpgradeOnboardingModal_v0_13_0_Content";

export { UpgradeOnboardingModal_v0_13_0_Content };
