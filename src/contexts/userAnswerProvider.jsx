import React, { useEffect, useState, useMemo } from "react";
import { AnswerContext, initialState } from "./userAnswerContext";

export const UserAnswerProvider = ({ children }) => {
  const [userAnswerValue, setUserAnswer] = useState(initialState);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserAnswer(storedUserData);
    }
  }, []);

  // const updateUserData = (newData) => {
  //   setUserAnswer(newData);
  //   localStorage.setItem('userData', JSON.stringify(newData));
  // };

  const addUserAnswer = () => {
    setUserAnswer((prevValue) => prevValue);
  };

  const contextValue = useMemo(() => ({
    userAnswerValue,
    addUserAnswer,
  }), [userAnswerValue, addUserAnswer]);

  return (
    <AnswerContext.Provider value={contextValue}>
      {children}
    </AnswerContext.Provider>
  );
};
