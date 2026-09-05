// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { useWaveEnv } from "@/app/waveenv/waveenv";
import { useTranslation } from "react-i18next";

const UpgradeOnboardingModal_v0_14_2_Content = () => {
    const waveEnv = useWaveEnv();
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start w-full mb-2 unselectable">
            <div className="text-secondary leading-relaxed mb-4">
                <p className="mb-0">{t("onboardingUpgrade.v0142.intro")}</p>
            </div>

            <div className="flex w-full items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-bell"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0142.badgesSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.badgesRollUpLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0142.badgesRollUpBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.bellIndicatorLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0142.bellIndicatorBodyPrefix")}{" "}
                                <code>term:bellindicator</code>
                                {t("onboardingUpgrade.v0142.bellIndicatorBodySuffix")}
                            </li>
                            <li>
                                <strong>
                                    <code>wsh badge</code>
                                </strong>{" "}
                                - {t("onboardingUpgrade.v0142.wshBadgeBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.claudeIntegrationLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0142.claudeIntegrationBodyPrefix")} <code>wsh badge</code>{" "}
                                {t("onboardingUpgrade.v0142.claudeIntegrationBodySuffix")}{" "}
                                <button
                                    onClick={() =>
                                        waveEnv.electron.openExternal("https://docs.waveterm.dev/claude-code")
                                    }
                                    className="text-accent text-sm font-normal cursor-pointer hover:underline"
                                >
                                    {t("onboardingUpgrade.v0142.seeDocs")}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-4">
                <div className="flex-shrink-0">
                    <i className="text-[24px] text-accent fa-solid fa-folder-open"></i>
                </div>
                <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="text-foreground text-base font-semibold leading-[18px]">
                        {t("onboardingUpgrade.v0142.otherSectionTitle")}
                    </div>
                    <div className="text-secondary leading-5">
                        <ul className="list-disc list-outside space-y-1 pl-5">
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.v0143Tag")} </strong>
                                {t("onboardingUpgrade.v0142.v0143Body")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.dirPreviewLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0142.dirPreviewBody")}
                            </li>
                            <li>
                                <strong>{t("onboardingUpgrade.v0142.searchBarLabel")}</strong> -{" "}
                                {t("onboardingUpgrade.v0142.searchBarBody")}
                            </li>
                            <li>{t("onboardingUpgrade.v0142.bugfixNewWindow")}</li>
                            <li>{t("onboardingUpgrade.v0142.bugfixSaveSession")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpgradeOnboardingModal_v0_14_2_Content.displayName = "UpgradeOnboardingModal_v0_14_2_Content";

export { UpgradeOnboardingModal_v0_14_2_Content };
