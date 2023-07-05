import Table from "@mui/material/Table";
import { Card } from "../../../Global/Card/Card";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  return (
    <Card className="p-0 py-2">
      <Table aria-label="collapsible table">
        <THead />
        <TBody />
      </Table>
    </Card>
  );
}
