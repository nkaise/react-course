import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ScrollProgress } from "../ScrollProgress/ScrollProgress";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
