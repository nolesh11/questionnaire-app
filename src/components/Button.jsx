import React from "react";

export const Button = ({
  buttonType,
  buttonText,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
    >
      {buttonText}
    </button>
  );
};
