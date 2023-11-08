import React from "react";

export const AnswerItem = ({
  id,
  answerLable,
  isChecked,
  onChange,
  img,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={isChecked}
        required
        type="radio"
        name="question"
        id={id}
      />
      <label htmlFor={id}>
        {img}
        {answerLable}
      </label>
    </li>
  );
};
