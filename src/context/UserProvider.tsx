import { UserContext } from "./UserContext";
import type { User } from "../types/user";
import userData from "../data/user-data.json";

const user = userData as User;

export function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
