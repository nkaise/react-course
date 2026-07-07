import { Counter } from "../Counter/Counter";
import { useState } from "react";

const MAX_VALUE = 5;
const MIN_VALUE = 1;

export const ReviewCounter = () => {
  const [count, setCount] = useState(MIN_VALUE);
  return (
    <Counter
      count={count}
      onDecrement={() => setCount((count) => Math.max(MIN_VALUE, count - 1))}
      onIncrement={() => setCount((count) => Math.min(MAX_VALUE, count + 1))}
    />
  );
};
