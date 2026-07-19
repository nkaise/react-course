import { useState } from "react";
import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";
import styles from "./restaurant.module.css";
import { ThemeContext } from "../ThemeProvider";
import { Button } from "../Button/Button";

export const Restaurant = ({ restaurants }) => {
  const [visibleRestaurant, setVisibleRestaurant] = useState(restaurants[0]);
  return (
    <>
      <div className={styles.restaurantBlock}>
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            onClick={() => {
              if (visibleRestaurant === restaurant) return;
              setVisibleRestaurant(restaurant);
            }}
            className={styles.restaurantBtn}
            text={restaurant.name ? restaurant.name : "Ресторан"}
          ></Button>
        ))}
      </div>
      <div>
        <RestaurantDetails
          id={visibleRestaurant.id}
          name={visibleRestaurant.name}
          menu={visibleRestaurant.menu}
          reviews={visibleRestaurant.reviews}
        />
      </div>
    </>
  );
};
