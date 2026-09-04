// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { globalStore } from "@/app/store/jotaiStore";
import { atom, PrimitiveAtom } from "jotai";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";

const resources = {
    en: { translation: en },
    de: { translation: de },
};

export type SupportedLanguage = keyof typeof resources;

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["en", "de"];

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    initImmediate: false,
});

export const languageAtom = atom<SupportedLanguage>("en") as PrimitiveAtom<SupportedLanguage>;

globalStore.sub(languageAtom, () => {
    const lang = globalStore.get(languageAtom);
    i18n.changeLanguage(lang);
});

export function setLanguage(lang: SupportedLanguage) {
    globalStore.set(languageAtom, lang);
}

export default i18n;
