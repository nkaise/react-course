import { Counter } from "../Counter/Counter";
import { useState } from "react";
import styles from "./dishItem.module.css";
import { useContext } from "react";
import { UserContext } from "../UserProvider";

const MAX_VALUE = 5;
const MIN_VALUE = 0;

export const DishItem = ({ dishName }) => {
  const [count, setCount] = useState(MIN_VALUE);
  const { user } = useContext(UserContext);
  return (
    <li className={styles.dishItem}>
      {dishName}
      {!!user && (
        <Counter
          count={count}
          onDecrement={() =>
            setCount((count) => Math.max(MIN_VALUE, count - 1))
          }
          onIncrement={() =>
            setCount((count) => Math.min(MAX_VALUE, count + 1))
          }
        />
      )}
    </li>
  );
};
