// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_13_1_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0131.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-brands fa-windows"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0131.windowsSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.integratedLayoutLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.integratedLayoutBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.gitBashLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.gitBashBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.sshAgentLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.sshAgentBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.focusKeybindingLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.focusKeybindingBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-sparkles"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0131.aiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.visualDesignLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.visualDesignBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.byokLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.byokBody")}
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
                        {t("onboardingUpgrade.v0131.terminalSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0131.scrollingKeybindingsLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0131.scrollingKeybindingsBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_13_1_Content.displayName = "UpgradeOnboardingModal_v0_13_1_Content";

export { UpgradeOnboardingModal_v0_13_1_Content };
