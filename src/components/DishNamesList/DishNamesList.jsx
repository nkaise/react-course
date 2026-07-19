import { DishItem } from "../DishItem/DishItem";
import styles from "./dishNameList.module.css";

export const DishNamesList = ({ dishes }) => {
  return (
    <>
      <h3 className={styles.dishName}>Меню</h3>
      <ul className={styles.dishList}>
        {dishes.map((dishName) => (
          <DishItem key={dishName.id} dishName={dishName.name} />
        ))}
      </ul>
    </>
  );
};
