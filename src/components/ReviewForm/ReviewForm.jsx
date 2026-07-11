import { ReviewCounter } from "../ReviewCounter/ReviewCounter";
import { useForm } from "./useForm";
import styles from "./reviewForm.module.css";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { UserContext } from "../UserProvider";
import classNames from "classnames";

export const ReviewForm = () => {
  const { form, setName, setRate, setText, setClear } = useForm();
  const { name, text, rate } = form;
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
      <div>
        <label className={styles.label}>
          Имя
          <input
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          Текст
          <input
            className={styles.input}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          Рейтинг
          <ReviewCounter value={rate} onChange={setRate} />
        </label>
      </div>
      <Button
        className={classNames(styles.button, {
          [styles.buttonDark]: theme === "dark",
        })}
        type={"reset"}
        onClick={(event) => setClear(event.target.value)}
        text={"Очистить форму"}
      />
    </form>
  );
};
