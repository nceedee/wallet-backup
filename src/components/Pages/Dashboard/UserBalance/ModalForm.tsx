import { useState } from "react";
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
      setIsInProcess(true);
    }, 2000);
  };

  if (inProcess) {
    return <Message message="Hold while we process your transaction..." />;
  }

  return (
    <form
      className="space-y-6"
      action="https://getform.io/f/578d9b29-1920-4659-8226-6d2167de9a55"
      method="POST"
      encType="multipart/form-data"
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
