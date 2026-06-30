import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const Restaurant = ({ data }) => {
  return (
    <div>
      {data.map((restaurant, index) => (
        <>
          <h1>{restaurant.name}</h1>
          <h3>Меню</h3>
          <DishNamesList data={data[index]} />
          <h3>Отзывы</h3>
          <ReviewsList data={data[index]} />
        </>
      ))}
    </div>
  );
};
