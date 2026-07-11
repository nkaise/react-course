import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import styles from "./restaurantDetails.module.css";

export const RestaurantDetails = ({ id, name, menu, reviews }) => {
  return (
    <div>
      <h2 className={styles.restaurantName}>{name ? name : "Ресторан"}</h2>
      {!!menu.length && <DishNamesList dishes={menu} />}
      {!!reviews.length && <ReviewsList reviews={reviews} />}
      <ReviewForm key={id} />
    </div>
  );
};
