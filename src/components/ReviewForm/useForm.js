import { useReducer } from "react";

const INITIAL_STATE = { name: "", text: "", rate: "", clear: "" };

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_RATE_ACTION = "SET_RATE_ACTION";
const SET_CLEAR_ACTION = "SET_CLEAR_ACTION";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATE_ACTION:
      return { ...state, rate: payload };
    case SET_CLEAR_ACTION:
      return { ...INITIAL_STATE, clear: payload };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setName = (value) =>
    dispatch({ type: SET_NAME_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRate = (value) =>
    dispatch({ type: SET_RATE_ACTION, payload: value });
  const setClear = (value) =>
    dispatch({ type: SET_CLEAR_ACTION, payload: value });

  return { form, setName, setRate, setText, setClear };
};
