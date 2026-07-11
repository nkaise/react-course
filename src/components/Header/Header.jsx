import { Button } from "../Button/Button";
import styles from "./header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { UserContext } from "../UserProvider";
import classNames from "classnames";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, toggleUser } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerBlocks}>
        <img src="../../public/logo.svg"></img>
        <h5 className={styles.headerTitle}>Рестораны и блюда</h5>
      </div>
      <div className={styles.headerBlocks}>
        <Button
          className={classNames(styles.button, {
            [styles.buttonDark]: theme === "dark",
          })}
          text={user === "" ? "Войти" : `${user} / Выйти`}
          type={"button"}
          onClick={toggleUser}
        />
        <Button
          className={classNames(styles.button, {
            [styles.buttonDark]: theme === "dark",
          })}
          text={"Сменить тему"}
          type={"button"}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};
