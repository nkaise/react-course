import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const RestaurantDetails = ({ id, name, menu, reviews }) => {
  return (
    <div>
      <h2>{name ? name : "Ресторан"}</h2>
      {!!menu.length && <DishNamesList dishes={menu} />}
      {!!reviews.length && <ReviewsList reviews={reviews} />}
      <ReviewForm key={id} />
    </div>
  );
};
