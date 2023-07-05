import { TableBody } from "@mui/material";
import { rows } from "../hook/createData/createData";
import { TableBodyRow } from "./TBodyRow/TBodyRow";

export const TBody = () => {
  return (
    <TableBody>
      {rows.map(row => (
        <TableBodyRow key={row.name} row={row} />
      ))}
    </TableBody>
  );
};
