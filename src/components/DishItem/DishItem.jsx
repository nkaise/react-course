import { Counter } from "../Counter/Counter";
import { useState } from "react";

const MAX_VALUE = 5;
const MIN_VALUE = 0;

export const DishItem = ({ dishName }) => {
  const [count, setCount] = useState(MIN_VALUE);
  return (
    <li>
      {dishName}
      <Counter
        count={count}
        onDecrement={() => setCount((count) => Math.max(MIN_VALUE, count - 1))}
        onIncrement={() => setCount((count) => Math.min(MAX_VALUE, count + 1))}
      />
    </li>
  );
};
