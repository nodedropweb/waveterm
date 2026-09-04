// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { Button } from "@/app/element/button";
import { useTranslation } from "react-i18next";

export const OnboardingFooter = ({
    currentStep,
    totalSteps,
    onNext,
    onPrev,
    onSkip,
}: {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onPrev?: () => void;
    onSkip?: () => void;
}) => {
    const { t } = useTranslation();
    const isLastStep = currentStep === totalSteps;
    const buttonText = isLastStep ? t("onboardingFeatures.getStarted") : t("onboardingFeatures.next");

    return (
        <footer className="unselectable flex-shrink-0 mt-5 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {currentStep > 1 && onPrev && (
                    <button className="text-muted cursor-pointer hover:text-foreground text-[13px]" onClick={onPrev}>
                        &lt; {t("onboardingFeatures.prev")}
                    </button>
                )}
                <span className="text-muted text-[13px]">
                    {t("onboardingFeatures.stepOf", { current: currentStep, total: totalSteps })}
                </span>
            </div>
            <div className="flex flex-row items-center justify-center [&>button]:!px-5 [&>button]:!py-2 [&>button]:text-sm">
                <Button className="font-[600]" onClick={onNext}>
                    {buttonText}
                </Button>
            </div>
            {!isLastStep && onSkip && (
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted cursor-pointer hover:text-muted-hover text-[13px]"
                    onClick={onSkip}
                >
                    {t("onboardingFeatures.skipFeatureTour")} &gt;
                </button>
            )}
        </footer>
    );
};
