export const DishNamesList = ({ data }) => {
  return (
    <ul>
      {data.menu.map((dishName) => (
        <li>{dishName.name}</li>
      ))}
    </ul>
  );
};
