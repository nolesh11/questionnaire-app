import React from "react";
import { Heading } from "../components/Heading";
import { Span } from "../components/Span";
import { Button } from "../components/Button";

const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              {/* <span className="indicator__description">
                Скидка за прохождение опроса:
              </span> */}
              {/* <span className="indicator__value">15%</span> */}
              <Span spanText="Скидка за прохождение опроса:" />
              <Span spanText="15%" />
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            {/* <h2>1. Занимательный вопрос</h2> */}
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <ul className="variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li>
            </ul>
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
            <Button buttonType="button" buttonText="Далее" isDisabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
