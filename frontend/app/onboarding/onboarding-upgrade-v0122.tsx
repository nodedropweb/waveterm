// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_12_2_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0122.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-file-pen"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0122.fileEditingSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0122.fileWriteToolLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0122.fileWriteToolBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0122.diffPreviewLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0122.diffPreviewBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0122.rollbackLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0122.rollbackBody")}
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
                        {t("onboardingUpgrade.v0122.aiSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>{t("onboardingUpgrade.v0122.aiItem1")}</li>
                            <li>
                                {t("onboardingUpgrade.v0122.aiItem2Prefix")}{" "}
                                <span className="font-mono">`wsh ai`</span> {t("onboardingUpgrade.v0122.aiItem2Suffix")}
                            </li>
                            <li>{t("onboardingUpgrade.v0122.aiItem3")}</li>
                            <li>{t("onboardingUpgrade.v0122.aiItem4")}</li>
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
                        {t("onboardingUpgrade.v0122.bugFixesSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>{t("onboardingUpgrade.v0122.bugFixItem1")}</li>
                            <li>{t("onboardingUpgrade.v0122.bugFixItem2")}</li>
                            <li>{t("onboardingUpgrade.v0122.bugFixItem3")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_12_2_Content.displayName = "UpgradeOnboardingModal_v0_12_2_Content";

export { UpgradeOnboardingModal_v0_12_2_Content };
