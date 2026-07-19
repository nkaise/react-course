import classNames from "classnames";
import styles from "./button.module.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

export const Button = ({ className, text, type, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.buttonDark]: theme === "dark",
      })}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
