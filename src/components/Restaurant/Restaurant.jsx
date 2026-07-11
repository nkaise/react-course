import { useState } from "react";
import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";

export const Restaurant = ({ restaurants }) => {
  const [visibleRestaurant, setVisibleRestaurant] = useState(restaurants[0]);
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            if (visibleRestaurant === restaurant) return;
            setVisibleRestaurant(restaurant);
          }}
        >
          {restaurant.name ? restaurant.name : "Ресторан"}
        </button>
      ))}
      <RestaurantDetails
        id={visibleRestaurant.id}
        name={visibleRestaurant.name}
        menu={visibleRestaurant.menu}
        reviews={visibleRestaurant.reviews}
      />
    </div>
  );
};
