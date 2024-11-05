import { ModeState } from "../generals/Types";
import { ComponentProps } from "react";
import threePoint from "../assets/IconTextImages/widgets/threePoints.svg";
import { SizeState } from "../generals/Types";
import { ContainerContentProps } from "../generals/Types";
import PercentageCircle from "../components/ChartScenes/PercentageCircle";
import React from "react";

export type DataContainerProps = {
  size: SizeState;
  data: ContainerContentProps[];
  className?: string;
} & ComponentProps<"div">;

const DataContainerBackground: React.FC<DataContainerProps> = ({
  className,
  size,
  data,
  ...props
}) => {
  const _className = className;

  const totalPages = data.length;

  const [currentPage, setCurrentPage] = React.useState(0);

  const [currentData, setCurrentData] = React.useState<ContainerContentProps>(
    data[0]
  );

  function handlePageChange(index: number) {
    setCurrentPage(index);
    setCurrentData(data[index]);
  }

  const { containerwidth, containerHeight, iconBackgroundSize } = mapSize(size);

  function mapSize(_size: "small" | "mid" | "large" | "largemid") {
    switch (_size) {
      case "small":
        return {
          containerwidth: "md:col-span-4",
          containerHeight: "h-[164px]",
          iconBackgroundSize: "h-[32px] w-[32px]",
        };
      case "large":
        return {
          containerwidth: "md:col-span-8",
          containerHeight: "h-[350px]",
          iconBackgroundSize: "h-[48px] w-[48px]",
        };
      case "mid":
        return {
          containerwidth: "md:col-span-4",
          containerHeight: "h-[200px]",
          iconBackgroundSize: "h-[48px] w-[48px]",
        };
      case "largemid":
        return {
          containerwidth: "md:col-span-4",
          containerHeight: "h-[350px]",
          iconBackgroundSize: "h-[48px] w-[48px]",
        };
    }
  }

  return (
    <>
      <div
        className={`bg-light-gradient dark:bg-dark-gradient px-[16px] py-[16px] rounded-[25px] ${containerHeight} ${containerwidth} ${_className ? "" + _className : ""}`}
        {...props}
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <div className="flex flex-row items-center justify-between iconText-threePoints mb-[16px]">
              <div className="iconText flex flex-row items-center gap-[8px]">
                <div
                  className={`${iconBackgroundSize} relative flex justify-center items-center`}
                >
                  <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>
                  <img
                    src={currentData.icon}
                    alt="icon"
                    className={`${size === "small" ? "w-[15px] h-[15px]" : "w-[24px] h-[24px]"}`}
                  />
                </div>
                <h2
                  className={`font-grot text-container-text-color text-medium ${size === "small" ? "text-base" : "text-lg"}`}
                >
                  {currentData.title}
                </h2>
              </div>
              <img
                src={threePoint}
                alt="treePoint"
                className="w-[4.8px] h-[17.4px]"
              />
            </div>
            <div className="mainContent flex items-baseline gap-[4px] mb-[8px]">
              <h1
                className={`${size === "largemid" ? "text-xlg" : "text-lg"} font-grot text-bold text-light-back`}
              >
                {currentData.main}
              </h1>
              <h4
                className={`${size === "largemid" ? "text-base" : "text-sm"} font-grot text-light-back opacity-40`}
              >
                {currentData.reference}
              </h4>
            </div>
            {currentData.percentage && (
              <PercentageCircle
                enabledFilledPercentage={currentData.percentage}
              />
            )}
          </div>
          <div className="flex items-end justify-end w-full bulletPointsPagesPosition">
            <div className="flex flex-row gap-[8px]">
              {Array.from({ length: totalPages }).map((_, index) => {
                return (
                  <div
                    className={`w-[8px] h-[8px] rounded-full ${index === currentPage ? "bg-white" : "bg-gray-400"}`}
                    key={index}
                    onClick={() => handlePageChange(index)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataContainerBackground;
