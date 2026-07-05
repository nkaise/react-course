import { DishItem } from "../DishItem/DishItem";

export const DishNamesList = ({ dishes }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {dishes.menu.map((dishName) => (
          <DishItem key={dishName.id} dishName={dishName.name} />
        ))}
      </ul>
    </>
  );
};
