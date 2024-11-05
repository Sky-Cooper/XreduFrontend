import React from "react";
import { PercentageProps } from "../../generals/Types";

const PercentageLine: React.FC<PercentageProps> = ({
  className,
  enabledFilledPercentage,
  width,
}) => {
  const widthPercentage = width ? (enabledFilledPercentage / 100) * width : 0;

  return (
    <div
      className={` relative bg-container-text-color rounded-[50px]   h-[4px] ${className ? "" + className : ""}`}
      style={{ width: `${width}px` }}
    >
      <div
        className="h-full bg-light-secondary-color"
        style={{ width: `${widthPercentage}px` }}
      ></div>
    </div>
  );
};

export default PercentageLine;
