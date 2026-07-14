import styles from "./counter.module.css";
import { ThemeContext } from "../ThemeProvider";
import { Button } from "../Button/Button";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counterBlock}>
      <Button type="button" onClick={onDecrement} text={"-"}></Button>
      <span className={styles.count}>{count}</span>
      <Button type="button" onClick={onIncrement} text={"+"}></Button>
    </div>
  );
};
