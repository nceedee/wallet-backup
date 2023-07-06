import { ReactNode } from "react";
export interface Bet {
  id: ReactNode;
  team1: string;
  team2: string;
  odd1: number;
  odd2: number;
  oddx: number;
  stadium: string;
}
