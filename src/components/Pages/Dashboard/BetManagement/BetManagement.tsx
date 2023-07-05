import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <THead />
        <TBody />
      </Table>
    </TableContainer>
  );
}
