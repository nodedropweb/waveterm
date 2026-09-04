// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_14_1_Content = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start w-full mb-2 unselectable">
            <div className="text-secondary leading-relaxed mb-4">
                <p className="mb-0">{t("onboardingUpgrade.v0141.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-terminal"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0141.terminalFixesSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.scrollFixLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.scrollFixBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.imeFixLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.imeFixBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.scrollResizeLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.scrollResizeBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.scrollbackSaveLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.scrollbackSaveBodyPrefix")} <code>wsh</code>{" "}
                                {t("onboardingUpgrade.v0141.scrollbackSaveBodySuffix")}
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
                        {t("onboardingUpgrade.v0141.newConfigSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.focusFollowsCursorLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.focusFollowsCursorBodyPrefix")}{" "}
                                <code>app:focusfollowscursor</code>{" "}
                                {t("onboardingUpgrade.v0141.focusFollowsCursorBodySuffix")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.cursorStyleLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.cursorStyleBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.vimNavLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.vimNavBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0141.newProvidersLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0141.newProvidersBody")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_14_1_Content.displayName = "UpgradeOnboardingModal_v0_14_1_Content";

export { UpgradeOnboardingModal_v0_14_1_Content };
