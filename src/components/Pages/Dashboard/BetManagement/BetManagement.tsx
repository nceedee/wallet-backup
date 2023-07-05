import Table from "@mui/material/Table";
import { Card } from "../../../Global/Card/Card";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  return (
    <Card className="p-0 py-2">
      <TextWrap className="text-sm capitalize ">football matches</TextWrap>
      <Table aria-label="collapsible table">
        <THead />
        <TBody />
      </Table>
    </Card>
  );
}
