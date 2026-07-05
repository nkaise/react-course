export const DishNamesList = ({ dishes }) => {
  return (
    <ul>
      {dishes.menu.map((dishName) => (
        <li>{dishName.name}</li>
      ))}
    </ul>
  );
};
