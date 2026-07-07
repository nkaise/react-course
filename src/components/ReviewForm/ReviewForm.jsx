import { ReviewCounter } from "../ReviewCounter/ReviewCounter";
import { useForm } from "./useForm";

export const ReviewForm = () => {
  const { form, setName, setRate, setText, setClear } = useForm();

  const { name, text, rate } = form;

  return (
    <form>
      <div>
        <label>
          Имя
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Текст
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Рейтинг</label>
        <ReviewCounter
          value={rate}
          onChange={(event) => setRate(event.target.value)}
        />
      </div>
      <button type="reset" onClick={(event) => setClear(event.target.value)}>
        Очистка
      </button>
    </form>
  );
};
