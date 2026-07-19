import { useState } from "react";
import { UserContext } from ".";

const MOCK_USER = "Алиса";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const toggleUser = () => {
    setUser((prev) => (prev === "" ? MOCK_USER : ""));
  };

  return <UserContext value={{ user, toggleUser }}>{children}</UserContext>;
};
