import { Restaurant } from "../Restaurant/Restaurant";

export const App = ({ data }) => {
  return (
    <div>
      <Restaurant data={data} />
    </div>
  );
};
