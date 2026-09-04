// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { setLanguage } from "@/util/i18n/i18n";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it } from "vitest";
import { AboutModalV } from "./about";

describe("AboutModalV localization", () => {
    afterEach(() => {
        setLanguage("en");
    });

    it("renders English strings by default", () => {
        const markup = renderToStaticMarkup(
            <AboutModalV versionString="0.14.5 (test)" updaterChannel="latest" onClose={() => null} />
        );
        expect(markup).toContain("Open-Source AI-Integrated Terminal");
        expect(markup).toContain("Client Version 0.14.5 (test)");
    });

    it("renders German strings once the language is switched", () => {
        setLanguage("de");
        const markup = renderToStaticMarkup(
            <AboutModalV versionString="0.14.5 (test)" updaterChannel="latest" onClose={() => null} />
        );
        expect(markup).toContain("Open-Source-KI-Terminal");
        expect(markup).toContain("Client-Version 0.14.5 (test)");
    });
});
