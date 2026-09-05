// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_12_3_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0123.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-sparkles"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0123.aiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0123.gpt51Label")}</strong> -{" "}
                                {t("onboardingUpgrade.v0123.gpt51Body")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0123.thinkingModeLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0123.thinkingModeBody")}
                            </li>
                            <li>{t("onboardingUpgrade.v0123.aiItem3")}</li>
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
                        {t("onboardingUpgrade.v0123.terminalSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0123.inputHandlingLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0123.inputHandlingBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0123.imagePasteLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0123.imagePasteBody")}
                            </li>
                            <li>{t("onboardingUpgrade.v0123.terminalItem3")}</li>
                            <li>{t("onboardingUpgrade.v0123.terminalItem4")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-key"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0123.secretStoreSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0123.secretWidgetLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0123.secretWidgetBody")}
                            </li>
                            <li>
                                {t("onboardingUpgrade.v0123.secretCliPrefix")}{" "}
                                <span className="font-mono">wsh secret list/get/set</span>{" "}
                                {t("onboardingUpgrade.v0123.secretCliSuffix")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_12_3_Content.displayName = "UpgradeOnboardingModal_v0_12_3_Content";

export { UpgradeOnboardingModal_v0_12_3_Content };
