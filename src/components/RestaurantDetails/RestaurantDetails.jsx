import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const RestaurantDetails = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name ? name : "Ресторан"}</h2>
      {!!menu.length && <DishNamesList dishes={menu} />}
      {!!reviews.length && <ReviewsList reviews={reviews} />}
    </div>
  );
};
