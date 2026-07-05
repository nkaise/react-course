import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";

export const App = ({ restaurants }) => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
