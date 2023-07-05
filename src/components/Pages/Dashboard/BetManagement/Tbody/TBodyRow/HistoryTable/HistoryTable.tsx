import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { createData } from "../../../hook/createData/createData";

export const HistoryTable = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props;

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Total price ($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {row.history.map(historyRow => (
          <TableRow key={historyRow.date}>
            <TableCell component="th" scope="row">
              {historyRow.date}
            </TableCell>
            <TableCell>{historyRow.customerId}</TableCell>
            <TableCell align="right">{historyRow.amount}</TableCell>
            <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
