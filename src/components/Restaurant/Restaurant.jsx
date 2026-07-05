import { useState } from "react";
import { DishNamesList } from "../DishNamesList/DishNamesList";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const Restaurant = ({ restaurants }) => {
  const [visibleRestaurant, setVisibleRestaurant] = useState(restaurants[0]);
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <button
          onClick={() => {
            if (visibleRestaurant === restaurants[index]) return;
            setVisibleRestaurant(restaurants[index]);
          }}
        >
          {restaurant.name ? restaurant.name : "Ресторан"}
        </button>
      ))}
      <div>
        <h2>{visibleRestaurant.name ? visibleRestaurant.name : "Ресторан"}</h2>
        {!!visibleRestaurant.menu.length && (
          <DishNamesList dishes={visibleRestaurant} />
        )}
        {!!visibleRestaurant.reviews.length && (
          <ReviewsList reviews={visibleRestaurant} />
        )}
      </div>
    </div>
  );
};
