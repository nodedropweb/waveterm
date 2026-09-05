// Copyright 2025, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { Modal } from "@/app/modals/modal";
import { recordTEvent } from "@/app/store/global";
import { useAtomValue } from "jotai";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { WaveUIMessagePart } from "./aitypes";
import { WaveAIModel } from "./waveai-model";

interface RestoreBackupModalProps {
    part: WaveUIMessagePart & { type: "data-tooluse" };
}

export const RestoreBackupModal = memo(({ part }: RestoreBackupModalProps) => {
    const { t } = useTranslation();
    const model = WaveAIModel.getInstance();
    const toolData = part.data;
    const status = useAtomValue(model.restoreBackupStatus);
    const error = useAtomValue(model.restoreBackupError);

    const formatTimestamp = (ts: number) => {
        if (!ts) return "";
        const date = new Date(ts);
        return date.toLocaleString();
    };

    const handleConfirm = () => {
        recordTEvent("waveai:revertfile", { "waveai:action": "revertfile:confirm" });
        model.restoreBackup(toolData.toolcallid, toolData.writebackupfilename, toolData.inputfilename);
    };

    const handleCancel = () => {
        recordTEvent("waveai:revertfile", { "waveai:action": "revertfile:cancel" });
        model.closeRestoreBackupModal();
    };

    const handleClose = () => {
        model.closeRestoreBackupModal();
    };

    if (status === "success") {
        return (
            <Modal
                className="restore-backup-modal pb-5 pr-5"
                onClose={handleClose}
                onOk={handleClose}
                okLabel={t("restoreBackup.close")}
            >
                <div className="flex flex-col gap-4 pt-4 pb-4 max-w-xl">
                    <div className="font-semibold text-lg text-green-500">{t("restoreBackup.restoredTitle")}</div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                        {t("restoreBackup.restoredBodyPrefix")}{" "}
                        <span className="font-mono text-white break-all">{toolData.inputfilename}</span>{" "}
                        {t("restoreBackup.restoredBodySuffix")}
                    </div>
                </div>
            </Modal>
        );
    }

    if (status === "error") {
        return (
            <Modal
                className="restore-backup-modal pb-5 pr-5"
                onClose={handleClose}
                onOk={handleClose}
                okLabel={t("restoreBackup.close")}
            >
                <div className="flex flex-col gap-4 pt-4 pb-4 max-w-xl">
                    <div className="font-semibold text-lg text-red-500">{t("restoreBackup.failedTitle")}</div>
                    <div className="text-sm text-gray-300 leading-relaxed">{t("restoreBackup.failedBody")}</div>
                    <div className="text-sm text-red-400 font-mono bg-zinc-800 p-3 rounded break-all">{error}</div>
                </div>
            </Modal>
        );
    }

    const isProcessing = status === "processing";

    return (
        <Modal
            className="restore-backup-modal pb-5 pr-5"
            onClose={handleCancel}
            onCancel={handleCancel}
            onOk={handleConfirm}
            okLabel={isProcessing ? t("restoreBackup.restoring") : t("restoreBackup.confirmRestore")}
            cancelLabel={t("modal.cancel")}
            okDisabled={isProcessing}
            cancelDisabled={isProcessing}
        >
            <div className="flex flex-col gap-4 pt-4 pb-4 max-w-xl">
                <div className="font-semibold text-lg">{t("restoreBackup.title")}</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                    {t("restoreBackup.confirmBodyPrefix")}{" "}
                    <span className="font-mono text-white break-all">{toolData.inputfilename}</span>{" "}
                    {t("restoreBackup.confirmBodySuffix")}
                    {toolData.runts && <span> ({formatTimestamp(toolData.runts)})</span>}.
                </div>
                <div className="text-sm text-gray-300 leading-relaxed">{t("restoreBackup.warning")}</div>
            </div>
        </Modal>
    );
});

RestoreBackupModal.displayName = "RestoreBackupModal";