import { useState } from "react";
import { uid } from "../../../../base/stores/stores";
import { Message } from "../../../Global/Message/Message";

type ModalCloseHandler = () => void;

const cryptoAddresses = [
  {
    label: "XLM",
    address: "GDHPDRNHTIBLTMM5JOQGUUJKYQLGXQT7SCKHRNIA3YXWOKCJNORSFBYH",
  },
  {
    label: "XRP",
    address: "r99M3WfDhcMCeR8c1rXTFYmwgCsvaJFmvn",
  },
  {
    label: "BTC",
    address: "bc1qxz7scqpymkaresc3g2hspkwkme66an9sn3lc08",
  },
];

export const ModalForm = ({ onClose }: { onClose: ModalCloseHandler }) => {
  const [copiedAddress, setCopiedAddress] = useState<string>("");
  const [inProcess, setIsInProcess] = useState(false);

  const onCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => {
      setCopiedAddress("");
    }, 2000);
  };

  const transactionInProgree = () => {
    setTimeout(() => {
      setIsInProcess(true);
      // Redirect to the dashboard after 2 seconds
      setTimeout(() => {
        window.location.href = "/dashboard"; // Replace with your dashboard URL
      }, 1000);
    }, 2000);
  };

  if (inProcess) {
    return <Message message="Hold while we process your transaction..." />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object to collect form data
    const formData = new FormData(e.target as HTMLFormElement);

    // Append the uid.id to the form data
    formData.append("id", `${uid.id}`);

    // Submit the form with the updated form data
    fetch("https://getform.io/f/578d9b29-1920-4659-8226-6d2167de9a55", {
      method: "POST",
      body: formData,
    });

    // Trigger the in-progress state
    transactionInProgree();
  };

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      action="https://getform.io/f/578d9b29-1920-4659-8226-6d2167de9a55"
      method="POST"
    >
      <div className="rounded-md bg-secondary p-5 text-white shadow-lg">
        <div>
          <label htmlFor="cryptoAddress" className="font-bold text-white">
            Choose Crypto Address:
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {cryptoAddresses.map(crypto => (
              <div key={crypto.label} className="flex items-center rounded-lg border border-gray-300 p-2">
                <div className="cursor-pointer" onClick={() => onCopyAddress(crypto.address)}>
                  {copiedAddress === crypto.address ? "Text Copied" : crypto.label}
                </div>
                <div className="ml-2 text-gray-500">{crypto.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="paymentValue" className="text-gray-700">
          Kindly State your payment value for validation (e.g. $100):
        </label>
        <input
          required
          type="text"
          id="paymentValue"
          name="paymentValue"
          placeholder="Enter your payment value"
          className="mt-4 w-full items-center rounded-lg border-b-2 border-b-[#ebebeb] p-1 py-0 outline-none"
        />
      </div>

      <div>
        <label htmlFor="transactionReceipt" className="text-gray-700">
          Send your transaction receipt for security reasons:
        </label>
        <input
          required
          type="file"
          id="transactionReceipt"
          name="transactionReceipt"
          className="w-full rounded-lg border-none p-2 outline-none"
        />
      </div>

      <input
        type="submit"
        value="Submit"
        className="w-full rounded border-none bg-accent p-2 font-bold text-white outline-none"
      />
    </form>
  );
};
