import React, { useState } from "react";
import { Heading } from "../components/Heading";
// import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "varian-1",
      answerLable: "Ответ №1",
    },
    {
      id: "varian-2",
      answerLable: "Ответ №2",
    },
    {
      id: "varian-3",
      answerLable: "Ответ №3",
    },
    {
      id: "varian-4",
      answerLable: "Ответ №4",
    },
  ];

  // useEffect(() => {
  //   console.log(checkedAnswer);
  // }, [checkedAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentSrep={2} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLable={elem.answerLable}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/step-three"
              buttonText="Далее"
              buttonType="button"
              isDisabled={!checkedAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
