import React from "react";

export const AcceptCheckbox = ({ checkboxText, ...props }) => {
  return (
    <label className="AcceptCheckbox">
      <input type="checkbox" {...props} />
      <span>{checkboxText}</span>
    </label>
  );
};
