import { useState, useContext } from "react";
import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";
import styles from "./restaurant.module.css";
import classNames from "classnames";
import { ThemeContext } from "../ThemeProvider";

export const Restaurant = ({ restaurants }) => {
  const [visibleRestaurant, setVisibleRestaurant] = useState(restaurants[0]);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.restaurantBlock}>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => {
              if (visibleRestaurant === restaurant) return;
              setVisibleRestaurant(restaurant);
            }}
            className={classNames(styles.restaurantBtn, {
              [styles.restaurantBtnActive]: restaurant === visibleRestaurant,
              [styles.restaurantBtnActiveDark]:
                theme === "dark" && restaurant === visibleRestaurant,
            })}
          >
            {restaurant.name ? restaurant.name : "Ресторан"}
          </button>
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
