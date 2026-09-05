// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_14_5_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-6 w-full mb-4 unselectable">
            <div className="text-secondary leading-relaxed">
                <p className="mb-0">{t("onboardingUpgrade.v0145.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-list-tree"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0145.processViewerTitle")}
                    </div>
                    <div className="text-secondary leading-5">{t("onboardingUpgrade.v0145.processViewerBody")}</div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-wrench"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0145.otherSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0145.quakeModeLabel")}</strong> &mdash;{" "}
                                {t("onboardingUpgrade.v0145.quakeModeBodyPrefix")} (<code>app:globalhotkey</code>){" "}
                                {t("onboardingUpgrade.v0145.quakeModeBodySuffix")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0145.dragDropLabel")}</strong>{" "}
                                {t("onboardingUpgrade.v0145.dragDropBody")}
                            </li>
                            <li>
                                {t("onboardingUpgrade.v0145.splitButtonsPrefix")}{" "}
                                <code>app:showsplitbuttons</code> {t("onboardingUpgrade.v0145.splitButtonsSuffix")}
                            </li>
                            <li>{t("onboardingUpgrade.v0145.toggleSidebar")}</li>
                            <li>{t("onboardingUpgrade.v0145.f2Rename")}</li>
                            <li>{t("onboardingUpgrade.v0145.mouseNavigation")}</li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0145.bugfixTag")}</strong>{" "}
                                {t("onboardingUpgrade.v0145.bugfixConfigFiles")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_14_5_Content.displayName = "UpgradeOnboardingModal_v0_14_5_Content";

export { UpgradeOnboardingModal_v0_14_5_Content };
