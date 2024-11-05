import { ModeState } from "../generals/Types";
import { ComponentProps } from "react";
import threePoint from "../assets/IconTextImages/widgets/threePoints.svg";
import { SizeState } from "../generals/Types";
import { ContainerContentProps } from "../generals/Types";
import PercentageCircle from "../components/ChartScenes/PercentageCircle";
import LineChart from "../components/ChartScenes/LineChart";
import PercentageLine from "../components/ChartScenes/PercentageLine";
import React from "react";

type ContainerProps = {
  size: SizeState;
  data: ContainerContentProps;
} & ComponentProps<"div">;

const ContainerBackground: React.FC<ContainerProps> = ({
  className,
  size,
  data,
  ...props
}) => {
  const _className = className;

  const percentageLinesData = data?.percentageLines || [];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(percentageLinesData.length / itemsPerPage);
  const currentItems = percentageLinesData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  function handlePageChange(index: number) {
    setCurrentPage(index);
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
        className={` bg-light-gradient dark:bg-dark-gradient  px-[16px] py-[16px]  rounded-[25px] ${containerHeight} ${containerwidth} ${_className ? "" + _className : ""}`}
        {...props}
      >
        <div className="flex flex-row items-center justify-between iconText-threePoints mb-[16px]">
          <div className="iconText flex flex-row items-center gap-[8px]">
            <div
              className={`iconBackground ${iconBackgroundSize} relative flex justify-center items-center`}
            >
              <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>
              <img
                src={data.icon}
                alt="icon"
                className={` ${size === "small" ? "w-[15px] h-[15px]" : "w-[24px] h-[24px]"}`}
              />
            </div>
            <h2
              className={`font-grot text-container-text-color text-medium ${size === "small" ? "text-base" : "text-lg"}`}
            >
              {data.title}
            </h2>
          </div>
          <img
            src={threePoint}
            alt="threePoint"
            className="w-[4.8px] h-[17.4px]"
          />
        </div>
        {data.main && data.reference && (
          <div className="mainContent flex items-baseline gap-[4px] mb-[8px]">
            <h1
              className={`${size === "largemid" ? "text-xlg" : "text-lg"} font-grot text-bold text-light-back`}
            >
              {data.main}
            </h1>
            <h4
              className={`${size === "largemid" ? "text-base" : "text-sm"}  font-grot text-regular text-light-back opacity-40`}
            >
              {data.reference}
            </h4>
          </div>
        )}
        {data.percentage && (
          <PercentageCircle enabledFilledPercentage={data.percentage} />
        )}
        {size === "large" &&
          (() => {
            const labelsAndDataSets = data.labelsDatasets || {
              labels: [],
              datasets: [],
            };
            return (
              <LineChart
                labelsAndDataSetsData={labelsAndDataSets}
                className="h-[250px]"
              />
            );
          })()}

        {data.percentageLines && (
          <div>
            {currentItems.map((item, index) => {
              return (
                <div
                  className="relative w-full flex flex-row gap-[16px] items-start mb-[16px]"
                  key={index}
                >
                  <div className="relative flex justify-center items-center h-[32px] w-[32px]">
                    <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>
                    <img
                      src={item.institutionImage}
                      alt={item.institutionName}
                      className="rounded-full h-[24px] w-[24px]"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-[4px]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <span className="text-sm font-grot font-regular text-container-text-color">
                        {item.institutionName}
                      </span>
                      <span className="text-sm font-grot font-regular text-container-text-color">
                        {item.percentage}%
                      </span>
                    </div>
                    <PercentageLine
                      width={300}
                      enabledFilledPercentage={item.percentage}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end w-full bulletPointsPagesPosition">
              <div className="bulletPointsPages  flex flex-row gap-[8px]">
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
        )}
      </div>
    </>
  );
};

export default ContainerBackground;
