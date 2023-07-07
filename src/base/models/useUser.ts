import { create } from "zustand";
import { IUserStore } from "./model.interface";

export const useUser = create<IUserStore>(set => ({
  user: undefined,
  setUser(user) {
    set(() => ({ user }));
  },
}));
