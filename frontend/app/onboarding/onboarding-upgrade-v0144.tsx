// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_14_4_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0144.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-table-columns"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0144.verticalTabSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0144.verticalTabLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0144.verticalTabBody")}
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
                        {t("onboardingUpgrade.v0144.terminalSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0144.xtermUpgradeLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0144.xtermUpgradeBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-wrench"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0144.otherSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0144.macFirstClickLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0144.macFirstClickBody")}
                            </li>
                            <li>
                                <strong>
                                    <code>backgrounds.json</code>
                                </strong>{" "}
                                - {t("onboardingUpgrade.v0144.renamedPrefix")} <code>presets/bg.json</code>{" "}
                                {t("onboardingUpgrade.v0144.renamedTo")} <code>backgrounds.json</code>
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0144.configErrorsLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0144.configErrorsBody")}
                            </li>
                            <li>{t("onboardingUpgrade.v0144.unsavedChangesWarning")}</li>
                            <li>{t("onboardingUpgrade.v0144.previewStreamingFix")}</li>
                            <li>{t("onboardingUpgrade.v0144.legacyAiRemoved")}</li>
                            <li>{t("onboardingUpgrade.v0144.bugfixFocus")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_14_4_Content.displayName = "UpgradeOnboardingModal_v0_14_4_Content";

export { UpgradeOnboardingModal_v0_14_4_Content };
