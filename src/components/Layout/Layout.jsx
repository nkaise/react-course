import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ScrollProgress } from "../ScrollProgress/ScrollProgress";

export const Layout = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
