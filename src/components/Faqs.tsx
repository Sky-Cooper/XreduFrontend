import React from "react";
import { FaqsProps } from "../generals/Types";
import { ComponentProps } from "react";
import faqsicon from "../assets/IconTextImages/DataGrid/Cols/faq.svg";
import threePoint from "../assets/IconTextImages/widgets/threePoints.svg";
import { useTheme } from "../components/SwitchMode/ThemeContext";
import lightMore from "../assets/IconTextImages/widgets/lightMode/more.svg";
import "./Faqs.css";
import darkMore from "../assets/IconTextImages/DataGrid/Cols/darkMore.svg";

type FaqsContainerProps = {
  data: FaqsProps[];
  className?: string;
} & ComponentProps<"div">;

const Faqs: React.FC<FaqsContainerProps> = ({ data, className, ...props }) => {
  const { theme } = useTheme();

  const [displayParagraph, setDisplayParagraph] = React.useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  function handleClickQuestion(index: number) {
    setDisplayParagraph((prevDisplayParagraph) => {
      const newDisplayParagraphe = [...prevDisplayParagraph];
      newDisplayParagraphe[index] = !newDisplayParagraphe[index];
      return newDisplayParagraphe;
    });
  }

  return (
    <div
      className={` md:col-span-12 bg-light-gradient dark:bg-dark-gradient px-[16px] py-[16px] rounded-[25px] ${className ? "" + className : ""}`}
      {...props}
    >
      <div className="flex flex-row items-center justify-between iconText-threePoints mb-[16px]">
        <div className="iconText flex flex-row items-center gap-[8px]">
          <div className="relative flex justify-center items-center w-[48px] h-[48px]">
            <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>

            <img src={faqsicon} alt="icon" className="w-[24px] h-[24px]" />
          </div>

          <h2
            className={`font-grot text-container-text-color text-medium text-xlg`}
          >
            Faqs
          </h2>
        </div>

        <img
          src={threePoint}
          alt="threePoint"
          className="w-[4.8px] h-[17.4px]"
        />
      </div>

      <div className="faqs flex flex-row gap-[16px] ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[400px] h-fit  py-[4px] px-[16px]  bg-transparent border-[1px] border-dark-back rounded-[25px] dark:border-gray-500 flex flex-col gap-[16px]"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-base font-medium font-grot text-container-text-color">
                  {item.question}
                </h2>
                <img
                  src={theme === "light" ? darkMore : lightMore}
                  alt="moreIcon"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => handleClickQuestion(index)}
                />
              </div>
              {displayParagraph[index] === true && (
                <p className="text-sm opacity-70 text-container-text-color font-regular font-grot">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
