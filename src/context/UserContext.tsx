import { createContext, useContext } from "react";
import type { User } from "../types/user";

export interface UserContextValue {
  user: User | null;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
}
