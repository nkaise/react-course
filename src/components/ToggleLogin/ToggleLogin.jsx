import { useContext } from "react";
import { UserContext } from "../UserProvider";
import { Button } from "../Button/Button";

export const ToggleLogin = () => {
  const { user, toggleUser } = useContext(UserContext);
  return (
    <Button
      text={user === "" ? "Войти" : `${user} / Выйти`}
      type={"button"}
      onClick={toggleUser}
    />
  );
};
