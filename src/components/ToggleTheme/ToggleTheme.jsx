import { Button } from "../Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

export const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <Button text={"Сменить тему"} type={"button"} onClick={toggleTheme} />;
};
