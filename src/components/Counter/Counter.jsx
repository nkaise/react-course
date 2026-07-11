import { useContext } from "react";
import styles from "./counter.module.css";
import classNames from "classnames";
import { ThemeContext } from "../ThemeProvider";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.counterBlock}>
      <button
        type="button"
        onClick={onDecrement}
        className={classNames(styles.btn, {
          [styles.btnDark]: theme === "dark",
        })}
      >
        <span
          className={classNames(styles.span, {
            [styles.spanDark]: theme === "dark",
          })}
        >
          -
        </span>
      </button>
      <span className={styles.count}>{count}</span>
      <button
        type="button"
        onClick={onIncrement}
        className={classNames(styles.btn, {
          [styles.btnDark]: theme === "dark",
        })}
      >
        <span
          className={classNames(styles.span, {
            [styles.spanDark]: theme === "dark",
          })}
        >
          +
        </span>
      </button>
    </div>
  );
};
