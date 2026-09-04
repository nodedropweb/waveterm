// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { MagnifyIcon } from "@/app/element/magnify";
import { PLATFORM, PlatformMacOS } from "@/util/platformutil";
import { cn } from "@/util/util";
import { useTranslation } from "react-i18next";

const KeyCap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="inline-block px-2 py-1 mx-[1px] font-mono text-[0.85em] text-foreground bg-highlightbg rounded-[3px] border border-gray-700 whitespace-nowrap">
            {children}
        </div>
    );
};

const IconBox = ({ children, variant = "accent" }: { children: React.ReactNode; variant?: "accent" | "secondary" }) => {
    const colorClasses =
        variant === "secondary"
            ? "text-secondary bg-white/5 border-white/10 [&_svg]:fill-secondary [&_svg_#arrow1]:fill-primary [&_svg_#arrow2]:fill-primary"
            : "text-accent-400 bg-accent-400/10 border-accent-400/20 [&_svg]:fill-accent-400 [&_svg_#arrow1]:fill-accent-400 [&_svg_#arrow2]:fill-accent-400";

    return (
        <div
            className={cn(
                "text-[20px] min-w-[32px] h-[32px] flex items-center justify-center rounded-md border [&_svg]:h-[16px]",
                colorClasses
            )}
        >
            {children}
        </div>
    );
};

const KeyBinding = ({ keyDecl }: { keyDecl: string }) => {
    const { t } = useTranslation();
    const chordParts = keyDecl.split("+");
    const chordElems: React.ReactNode[] = [];

    for (let chordIdx = 0; chordIdx < chordParts.length; chordIdx++) {
        const parts = chordParts[chordIdx].trim().split(":");
        const elems: React.ReactNode[] = [];

        for (let part of parts) {
            if (part === "Cmd") {
                if (PLATFORM === PlatformMacOS) {
                    elems.push(<KeyCap key={`${chordIdx}-cmd`}>⌘ {t("element.keyCmd")}</KeyCap>);
                } else {
                    elems.push(<KeyCap key={`${chordIdx}-alt`}>{t("element.keyAlt")}</KeyCap>);
                }
                continue;
            }
            if (part == "Ctrl") {
                elems.push(<KeyCap key={`${chordIdx}-ctrl`}>^ {t("element.keyCtrl")}</KeyCap>);
                continue;
            }
            if (part == "Shift") {
                elems.push(<KeyCap key={`${chordIdx}-shift`}>⇧ {t("element.keyShift")}</KeyCap>);
                continue;
            }
            if (part == "Arrows") {
                elems.push(<KeyCap key={`${chordIdx}-arrows1`}>←</KeyCap>);
                elems.push(<KeyCap key={`${chordIdx}-arrows2`}>→</KeyCap>);
                elems.push(<KeyCap key={`${chordIdx}-arrows3`}>↑</KeyCap>);
                elems.push(<KeyCap key={`${chordIdx}-arrows4`}>↓</KeyCap>);
                continue;
            }
            if (part == "Digit") {
                elems.push(<KeyCap key={`${chordIdx}-digit`}>{t("element.keyNumberRange")}</KeyCap>);
                continue;
            }
            if (part == "[" || part == "]") {
                elems.push(<KeyCap key={`${chordIdx}-${part}`}>{part}</KeyCap>);
                continue;
            }
            elems.push(<KeyCap key={`${chordIdx}-${part}`}>{part.toUpperCase()}</KeyCap>);
        }

        chordElems.push(
            <div key={`chord-${chordIdx}`} className="flex flex-row items-center gap-1">
                {elems}
            </div>
        );

        if (chordIdx < chordParts.length - 1) {
            chordElems.push(
                <span key={`plus-${chordIdx}`} className="text-secondary mx-1">
                    +
                </span>
            );
        }
    }

    return <div className="flex flex-row items-center">{chordElems}</div>;
};

const QuickTips = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col w-full gap-6 @container">
            <div className="flex flex-col gap-4 p-5 bg-gradient-to-br from-highlightbg/30 to-transparent hover:from-accent-400/5 rounded-lg border border-white/10 hover:border-accent-400/20 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <div className="w-1 h-6 bg-accent-400 rounded-full"></div>
                    <span className="text-foreground">{t("quickTips.headerIcons")}</span>
                </div>
                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <MagnifyIcon enabled={false} />
                        </IconBox>
                        <div className="flex flex-col gap-0.5 flex-1">
                            <span className="text-[15px]">{t("quickTips.magnifyBlock")}</span>
                            <KeyBinding keyDecl="Cmd:m" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-laptop fa-fw" />
                        </IconBox>
                        <div className="flex flex-col gap-0.5 flex-1">
                            <span className="text-[15px]">{t("quickTips.connectRemoteServer")}</span>
                            <KeyBinding keyDecl="Cmd:g" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-cog fa-fw" />
                        </IconBox>
                        <span className="text-[15px]">{t("quickTips.blockSettings")}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-xmark-large fa-fw" />
                        </IconBox>
                        <div className="flex flex-col gap-0.5 flex-1">
                            <span className="text-[15px]">{t("quickTips.closeBlock")}</span>
                            <KeyBinding keyDecl="Cmd:w" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-gradient-to-br from-highlightbg/30 to-transparent hover:from-accent-400/5 rounded-lg border border-white/10 hover:border-accent-400/20 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <div className="w-1 h-6 bg-accent-400 rounded-full"></div>
                    <span className="text-foreground">{t("quickTips.importantKeybindings")}</span>
                </div>

                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-x-5 gap-y-6">
                    <div className="flex flex-col gap-1.5">
                        <div className="text-sm text-accent-400 font-semibold uppercase tracking-wide mb-1">
                            {t("quickTips.mainKeybindings")}
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.newTab")}</span>
                            <KeyBinding keyDecl="Cmd:t" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.newTerminalBlock")}</span>
                            <KeyBinding keyDecl="Cmd:n" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.openWaveAiPanel")}</span>
                            <KeyBinding keyDecl="Cmd:Shift:a" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="text-sm text-accent-400 font-semibold uppercase tracking-wide mb-1">
                            {t("quickTips.tabSwitching", {
                                modifier: PLATFORM === PlatformMacOS ? t("element.keyCmd") : t("element.keyAlt"),
                            })}
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.switchToNthTab")}</span>
                            <KeyBinding keyDecl="Cmd:Digit" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.previousTab")}</span>
                            <KeyBinding keyDecl="Cmd:[" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.nextTab")}</span>
                            <KeyBinding keyDecl="Cmd:]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="text-sm text-accent-400 font-semibold uppercase tracking-wide mb-1">
                            {t("quickTips.blockNavigation")}
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.navigateBetweenBlocks")}</span>
                            <KeyBinding keyDecl="Ctrl:Shift:Arrows" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.focusNthBlock")}</span>
                            <KeyBinding keyDecl="Ctrl:Shift:Digit" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.focusWaveAi")}</span>
                            <KeyBinding keyDecl="Ctrl:Shift:0" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="text-sm text-accent-400 font-semibold uppercase tracking-wide mb-1">
                            {t("quickTips.splitBlocks")}
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.splitRight")}</span>
                            <KeyBinding keyDecl="Cmd:d" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.splitBelow")}</span>
                            <KeyBinding keyDecl="Cmd:Shift:d" />
                        </div>
                        <div className="flex flex-col gap-0.5 p-2 rounded-md hover:bg-white/5 transition-colors">
                            <span className="text-[15px]">{t("quickTips.splitInDirection")}</span>
                            <KeyBinding keyDecl="Ctrl:Shift:s + Arrows" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-gradient-to-br from-highlightbg/30 to-transparent hover:from-accent-400/5 rounded-lg border border-white/10 hover:border-accent-400/20 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <div className="w-1 h-6 bg-accent-400 rounded-full"></div>
                    <span className="text-foreground">{t("quickTips.wshCommands")}</span>
                </div>
                <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 bg-black/20 rounded-lg border border-accent-400/30 hover:border-accent-400/50 transition-colors">
                        <code className="font-mono text-sm">
                            <span className="text-secondary">&gt; </span>
                            <span className="text-accent-400 font-semibold">wsh view</span>
                            <span className="text-muted"> [filename|url]</span>
                        </code>
                        <div className="text-secondary text-sm mt-1">{t("quickTips.wshViewDesc")}</div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-black/20 rounded-lg border border-accent-400/30 hover:border-accent-400/50 transition-colors">
                        <code className="font-mono text-sm">
                            <span className="text-secondary">&gt; </span>
                            <span className="text-accent-400 font-semibold">wsh edit</span>
                            <span className="text-muted"> [filename]</span>
                        </code>
                        <div className="text-secondary text-sm mt-1">{t("quickTips.wshEditDesc")}</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-gradient-to-br from-highlightbg/30 to-transparent hover:from-accent-400/5 rounded-lg border border-white/10 hover:border-accent-400/20 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <div className="w-1 h-6 bg-accent-400 rounded-full"></div>
                    <span className="text-foreground">{t("quickTips.moreTips")}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-computer-mouse fa-fw" />
                        </IconBox>
                        <span>
                            <b>{t("quickTips.tabsLabel")}</b> - {t("quickTips.tabsBody")}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-cog fa-fw" />
                        </IconBox>
                        <span>
                            <b>{t("quickTips.webViewLabel")}</b> - {t("quickTips.webViewBody")}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-cog fa-fw" />
                        </IconBox>
                        <span>
                            <b>{t("quickTips.terminalLabel")}</b> - {t("quickTips.terminalBody")}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-gradient-to-br from-highlightbg/30 to-transparent hover:from-accent-400/5 rounded-lg border border-white/10 hover:border-accent-400/20 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <div className="w-1 h-6 bg-accent-400 rounded-full"></div>
                    <span className="text-foreground">{t("quickTips.needMoreHelp")}</span>
                </div>
                <div className="grid grid-cols-1 @sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-3 p-3 rounded-md bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                        <IconBox variant="secondary">
                            <i className="fa-brands fa-discord fa-fw" />
                        </IconBox>
                        <a
                            target="_blank"
                            href="https://discord.gg/XfvZ334gwU"
                            rel="noopener"
                            className="hover:text-accent-400 hover:underline transition-colors font-medium"
                        >
                            {t("quickTips.joinDiscord")}
                        </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-sliders fa-fw" />
                        </IconBox>
                        <a
                            target="_blank"
                            href="https://docs.waveterm.dev/config"
                            rel="noopener"
                            className="hover:text-accent-400 hover:underline transition-colors font-medium"
                        >
                            {t("quickTips.configOptions")}
                        </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-keyboard fa-fw" />
                        </IconBox>
                        <a
                            target="_blank"
                            href="https://docs.waveterm.dev/keybindings"
                            rel="noopener"
                            className="hover:text-accent-400 hover:underline transition-colors font-medium"
                        >
                            {t("quickTips.allKeybindings")}
                        </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                        <IconBox variant="secondary">
                            <i className="fa-solid fa-sharp fa-book fa-fw" />
                        </IconBox>
                        <a
                            target="_blank"
                            href="https://docs.waveterm.dev"
                            rel="noopener"
                            className="hover:text-accent-400 hover:underline transition-colors font-medium"
                        >
                            {t("quickTips.fullDocumentation")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { KeyBinding, QuickTips };
