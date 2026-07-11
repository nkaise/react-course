import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";
import { UserProvider } from "../UserProvider/UserProvider";
import "./app.css";

export const App = ({ restaurants }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};
