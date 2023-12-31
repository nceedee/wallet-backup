import React, { useState } from "react";
import { Message } from "../../../../../Global/Message/Message";
import { KeystoreBackup } from "./KeystoreBackup";
import { PrivateKeyBackup } from "./PrivateKeyBackup";
import { RecoveryPhraseBackup } from "./RecoveryPhraseBackup";

export const WalletBackupForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleBackupSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Wallet Backup</h1>
      <div className="flex justify-between">
        <button
          className="m-2 rounded-lg bg-secondary px-4 py-2 text-white"
          onClick={() => setSelectedOption("keystore")}
        >
          Keystore JSON
        </button>
        <button
          className="m-2 rounded-lg bg-secondary px-4 py-2 text-white"
          onClick={() => setSelectedOption("privateKey")}
        >
          Private Key
        </button>
        <button
          className="m-2 rounded-lg bg-secondary px-4 py-2 text-white"
          onClick={() => setSelectedOption("recoveryPhrase")}
        >
          Recovery Phrase
        </button>
      </div>

      {selectedOption === "keystore" && <KeystoreBackup onSuccess={handleBackupSuccess} />}
      {selectedOption === "privateKey" && <PrivateKeyBackup onSuccess={handleBackupSuccess} />}
      {selectedOption === "recoveryPhrase" && <RecoveryPhraseBackup onSuccess={handleBackupSuccess} />}
      {success && <Message message="Backup Successfully" className="rounded bg-secondary p-4 text-white " />}
    </div>
  );
};
