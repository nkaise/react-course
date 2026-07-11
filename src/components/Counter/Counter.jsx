export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div>
      <button type="button" onClick={onDecrement}>
        -
      </button>
      {count}
      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
