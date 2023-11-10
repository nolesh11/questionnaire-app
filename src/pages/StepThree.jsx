import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "varian-1",
      answerLable: "Ваш ответ 1",
      // src: "./img/hearts.png",
      img: <img src={`${"./img/laugh.png"}`} alt="hello" />,
    },
    {
      id: "varian-2",
      answerLable: "Ваш ответ 2",
      img: <img src={`${"./img/hearts.png"}`} alt="hello" />,
    },
    {
      id: "varian-3",
      answerLable: "Ваш ответ 3",
      img: <img src={`${"./img/smirk.png"}`} alt="hello" />,
    },
    {
      id: "varian-4",
      answerLable: "Ваш ответ 4",
      img: <img src={`${"./img/fright.png"}`} alt="hello" />,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentSrep={3} />
          <div className="question">
            <Heading text="3. Занимательный вопрос" headingType="h2" />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  img={elem.img}
                  answerLable={elem.answerLable}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>

            <LinkButton
              path="/step-four"
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

export default StepThree;
