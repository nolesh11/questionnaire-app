import React from "react";

export const AcceptInput = ({
  id,
  inputLable,
  inputType,
  inputPlaceholder,
  errorMessage,
  hasError,
  ...props
}) => {
  return (
    <label className={`input-wrapper ${hasError && '_error'}`} htmlFor={id}>
      {inputLable}
      <input
        type={inputType ?? "text"}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        {...props}
      />
      {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
