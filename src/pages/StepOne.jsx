import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
// import { Button } from "../components/Button";
// import { Span } from "../components/Span";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState("");
  const clickHandler = () => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentSrep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <Input
              hasError={answerError}
              value={answerValue}
              onChange={setAnswerValue}
              isRequired
              id="answer"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате например"
            />
            <LinkButton
              path="/step-two"
              buttonText="Далее"
              buttonType="button"
              onClick={clickHandler}
              isDisabled={!answerValue}
            />
            {/* <Button onClick={clickHandler} buttonText="Далее" buttonType="button" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
