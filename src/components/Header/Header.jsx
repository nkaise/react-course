import { Button } from "../Button/Button";
import styles from "./header.module.css";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import { ToggleLogin } from "../ToggleLogin/ToggleLogin";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerBlocks}>
        <img src="/logo.svg"></img>
        <h5 className={styles.headerTitle}>Рестораны и блюда</h5>
      </div>
      <div className={styles.headerBlocks}>
        <ToggleLogin />
        <ToggleTheme />
      </div>
    </header>
  );
};
