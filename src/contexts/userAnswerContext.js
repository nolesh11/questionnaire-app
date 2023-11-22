import { createContext } from "react";

export const initialState = {
  welcomeAnswerName: '',
  welcomeAnswerPhone: '',
  addUserAnswer: () => {},
};

export const AnswerContext = createContext(initialState);
