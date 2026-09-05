// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import Logo from "@/app/asset/logo.svg";
import { OnboardingGradientBg } from "@/app/onboarding/onboarding-common";
import { atoms } from "@/app/store/global";
import { modalsModel } from "@/app/store/modalmodel";
import { RpcApi } from "@/app/store/wshclientapi";
import { TabRpcClient } from "@/app/store/wshrpcutil";
import { languageAtom, SUPPORTED_LANGUAGES, SupportedLanguage } from "@/util/i18n/i18n";
import { isDev } from "@/util/isdev";
import { fireAndForget } from "@/util/util";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "./modal";

interface AboutModalVProps {
    versionString: string;
    updaterChannel: string;
    onClose: () => void;
}

const AboutModalV = ({ versionString, updaterChannel, onClose }: AboutModalVProps) => {
    const currentDate = new Date();
    const { t } = useTranslation();
    const language = useAtomValue(languageAtom);

    return (
        <Modal className="pt-[34px] pb-[34px] overflow-hidden w-[450px]" onClose={onClose}>
            <OnboardingGradientBg />
            <div className="flex flex-col gap-[26px] w-full relative z-10">
                <div className="flex flex-col items-center justify-center gap-4 self-stretch w-full text-center">
                    <Logo />
                    <div className="text-[25px]">{t("about.title")}</div>
                    <div className="leading-5">
                        {t("about.tagline1")}
                        <br />
                        {t("about.tagline2")}
                    </div>
                </div>
                <div className="items-center gap-4 self-stretch w-full text-center">
                    {t("about.clientVersion", { version: versionString })}
                    <br />
                    {t("about.updateChannel", { channel: updaterChannel })}
                </div>
                <div className="grid grid-cols-2 gap-[10px] self-stretch w-full">
                    <a
                        href="https://github.com/wavetermdev/waveterm?ref=about"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center px-4 py-2 rounded border border-border hover:bg-hoverbg transition-colors duration-200"
                    >
                        <i className="fa-brands fa-github mr-2"></i>
                        {t("about.github")}
                    </a>
                    <a
                        href="https://www.waveterm.dev/?ref=about"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center px-4 py-2 rounded border border-border hover:bg-hoverbg transition-colors duration-200"
                    >
                        <i className="fa-sharp fa-light fa-globe mr-2"></i>
                        {t("about.website")}
                    </a>
                    <a
                        href="https://github.com/wavetermdev/waveterm/blob/main/ACKNOWLEDGEMENTS.md"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center px-4 py-2 rounded border border-border hover:bg-hoverbg transition-colors duration-200"
                    >
                        <i className="fa-sharp fa-light fa-book mr-2"></i>
                        {t("about.openSource")}
                    </a>
                    <a
                        href="https://github.com/sponsors/wavetermdev"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center px-4 py-2 rounded border border-border hover:bg-hoverbg transition-colors duration-200"
                    >
                        <i className="fa-sharp fa-light fa-heart mr-2"></i>
                        {t("about.sponsor")}
                    </a>
                </div>
                <div className="items-center gap-4 self-stretch w-full text-center">
                    {t("about.copyright", { year: currentDate.getFullYear() })}
                </div>
                <div className="flex items-center justify-center gap-2 self-stretch w-full">
                    {SUPPORTED_LANGUAGES.map((lang: SupportedLanguage) => (
                        <button
                            key={lang}
                            onClick={() =>
                                fireAndForget(() =>
                                    RpcApi.SetConfigCommand(TabRpcClient, { "app:language": lang })
                                )
                            }
                            className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors duration-200 ${
                                language === lang ? "bg-accent/80 text-primary" : "hover:bg-hoverbg"
                            }`}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

AboutModalV.displayName = "AboutModalV";

const AboutModal = () => {
    const fullConfig = useAtomValue(atoms.fullConfigAtom);
    const versionString = `${fullConfig?.version ?? ""} (${isDev() ? "dev-" : ""}${fullConfig?.buildtime ?? ""})`;
    const updaterChannel = fullConfig?.settings?.["autoupdate:channel"] ?? "latest";

    useEffect(() => {
        fireAndForget(async () => {
            RpcApi.RecordTEventCommand(
                TabRpcClient,
                { event: "action:other", props: { "action:type": "about" } },
                { noresponse: true }
            );
        });
    }, []);

    return (
        <AboutModalV
            versionString={versionString}
            updaterChannel={updaterChannel}
            onClose={() => modalsModel.popModal()}
        />
    );
};

AboutModal.displayName = "AboutModal";

export { AboutModal, AboutModalV };
