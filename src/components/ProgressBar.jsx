import React from "react";

export const ProgressBar = ({ currentSrep }) => {
  const indicatorSteps = [1, 2, 3, 4];
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {
          indicatorSteps.map((step, index) => (
            <div
              key={step}
              className={
                `indicator__unit indicator__unit-1 ${index < currentSrep && '_active'}`
              }
            />
          ))
        }
      </div>
    </div>
  );
};
