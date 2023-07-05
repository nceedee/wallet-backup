import { TableCell, TableHead, TableRow } from "@mui/material";

export const THead = () => {
  const texts = ["", "HOME team - AWAY team", "1", "x", "2", "Stadium"];
  return (
    <TableHead>
      <TableRow>
        {texts.map((text, i) => {
          const right = i > 1 ? "right" : "left";

          return (
            <TableCell key={i} align={`${right}`}>
              {text}
            </TableCell>
          );
        })}
        {/*  
        <TableCell />
        <TableCell align="right">HOME team - AWAY team</TableCell>
        <TableCell align="right">1</TableCell>
        <TableCell align="right">x</TableCell>
        <TableCell align="right">2</TableCell>
        <TableCell align="right">Stadium</TableCell>
      */}
      </TableRow>
    </TableHead>
  );
};
