import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useGetWithId } from "../../Global/hook/useGetWithId";
import { LoadingModal } from "../../Global/LoadingModal/LoadingModal";

interface INotify {
  className?: ReactNode;
}

export const Notifications = ({ className }: INotify) => {
  const { data, isLoading, isSuccess } = useGetWithId("transactionHistory");
  const rows = useMemo(() => (data?.data ? Object.values(data.data) : []), [data]);

  if (isLoading) {
    return <LoadingModal />;
  }
  if (rows.length === 0) {
    return <h1 className="p-4 text-center text-xl ">No Transaction History. </h1>;
  }
  if (isSuccess) {
    return (
      <div className={`sm:mt-20 md:mt-0  ${className}`}>
        {rows.map((transaction: any) => (
          <Accordion key={transaction.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontWeight: "900" }}>Deposit Transaction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{transaction.deposit}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }
  return <div>Error occurred while fetching data.</div>;
};
