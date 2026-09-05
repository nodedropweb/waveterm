// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_12_1_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0121.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-terminal"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0121.shellSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0121.osc7Label")}</strong> -{" "}
                                {t("onboardingUpgrade.v0121.osc7Body")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0121.shellContextLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0121.shellContextBody")}
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
                        {t("onboardingUpgrade.v0121.aiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>{t("onboardingUpgrade.v0121.aiItem1")}</li>
                            <li>{t("onboardingUpgrade.v0121.aiItem2")}</li>
                            <li>{t("onboardingUpgrade.v0121.aiItem3")}</li>
                            <li>{t("onboardingUpgrade.v0121.aiItem4")}</li>
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
                        {t("onboardingUpgrade.v0121.otherSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>{t("onboardingUpgrade.v0121.otherItem1")}</li>
                            <li>{t("onboardingUpgrade.v0121.otherItem2")}</li>
                            <li>{t("onboardingUpgrade.v0121.otherItem3")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_12_1_Content.displayName = "UpgradeOnboardingModal_v0_12_1_Content";

export { UpgradeOnboardingModal_v0_12_1_Content };
