import { ReviewCounter } from "../ReviewCounter/ReviewCounter";
import { useForm } from "./useForm";

export const ReviewForm = () => {
  const { form, setName, setRate, setText, setClear } = useForm();

  const { name, text, rate } = form;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
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
        <label>
          Рейтинг
          <ReviewCounter value={rate} onChange={setRate} />
        </label>
      </div>
      <button type="reset" onClick={(event) => setClear(event.target.value)}>
        Очистка
      </button>
    </form>
  );
};
