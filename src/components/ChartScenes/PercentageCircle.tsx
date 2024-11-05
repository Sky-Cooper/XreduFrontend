import React from "react";
import { PercentageProps } from "../../generals/Types";

const PercentageCircle: React.FC<PercentageProps> = ({
  enabledFilledPercentage,
  className,
}) => {
  return (
    <div
      className={`relative h-[48px] w-[48px]  ${className ? className : ""}`}
    >
      <div
        className="absolute w-full h-full rounded-full circular-progress"
        style={{
          background: `conic-gradient(#CCE5FF ${enabledFilledPercentage * 3.6}deg, rgba(204, 229, 255, 0.2) 0deg)`,
        }}
      ></div>

      <div
        className="absolute w-[34px] h-[34px] bg-light-primary-color flex justify-center items-center
       dark:bg-dark-primary-color rounded-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <span className="relative text-xs font-medium font-grot text-container-text-color">
          {enabledFilledPercentage}%
        </span>
      </div>
    </div>
  );
};

export default PercentageCircle;
