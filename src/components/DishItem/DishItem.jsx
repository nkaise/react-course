import { useState } from "react";

const MAX_VALUE = 5;
const MIN_VALUE = 0;

export const DishItem = ({ dishName }) => {
  const [count, setCount] = useState(0);
  return (
    <li>
      {dishName}
      <button
        onClick={() => setCount((count) => Math.max(MIN_VALUE, count - 1))}
      >
        -
      </button>
      {count}
      <button
        onClick={() => setCount((count) => Math.min(MAX_VALUE, count + 1))}
      >
        +
      </button>
    </li>
  );
};
