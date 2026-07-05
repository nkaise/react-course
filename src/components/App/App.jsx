import { Restaurants } from "../Restaurants/Restaurants";

export const App = ({ restaurants }) => {
  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
