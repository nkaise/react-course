import { Counter } from "../Counter/Counter";

const MAX_VALUE = 5;
const MIN_VALUE = 1;

export const ReviewCounter = ({ value, onChange }) => {
  return (
    <Counter
      count={value}
      onDecrement={() => onChange(Math.max(MIN_VALUE, value - 1))}
      onIncrement={() => onChange(Math.min(MAX_VALUE, value + 1))}
    />
  );
};
