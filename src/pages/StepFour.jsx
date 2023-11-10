import React, { useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItem } from "../components/AnswerItem";

const StepFour = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLable: "1",
    },
    {
      id: "variant-2",
      answerLable: "2",
    },
    {
      id: "variant-3",
      answerLable: "3",
    },
    {
      id: "variant-4",
      answerLable: "4",
    },
    {
      id: "variant-5",
      answerLable: "5",
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentSrep={4} />
          <div className="question">
            <Heading text="4. Занимательный вопрос" headingType="h2" />
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  className={elem.class}
                  answerLable={elem.answerLable}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/thanks"
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

export default StepFour;
