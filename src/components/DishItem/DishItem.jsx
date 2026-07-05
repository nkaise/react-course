import { useState } from "react";

export const DishItem = ({ dishName }) => {
  const [count, setCount] = useState(0);
  const maxValue = 5;
  const minValue = 0;
  return (
    <li>
      {dishName}
      <button
        onClick={() => setCount((count) => Math.max(minValue, count - 1))}
      >
        -
      </button>
      {count}
      <button
        onClick={() => setCount((count) => Math.min(maxValue, count + 1))}
      >
        +
      </button>
    </li>
  );
};
