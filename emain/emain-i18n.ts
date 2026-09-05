// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

// The Electron main process builds the native app menu, which runs outside
// the renderer's react-i18next context, so it needs its own small i18next
// instance sharing the same locale resources.

import i18next, { TFunction } from "i18next";
import de from "@/util/i18n/locales/de.json";
import en from "@/util/i18n/locales/en.json";

const menuI18n = i18next.createInstance();
menuI18n.init({
    resources: {
        en: { translation: en },
        de: { translation: de },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    initImmediate: false,
});

export function getMenuT(language: string): TFunction {
    const lang = language === "de" ? "de" : "en";
    if (menuI18n.language !== lang) {
        menuI18n.changeLanguage(lang);
    }
    return menuI18n.t.bind(menuI18n);
}
