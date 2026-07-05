import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const Restaurant = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <DishNamesList dishes={restaurants[index]} />
          <h3>Отзывы</h3>
          <ReviewsList reviews={restaurants[index]} />
        </>
      ))}
    </div>
  );
};
