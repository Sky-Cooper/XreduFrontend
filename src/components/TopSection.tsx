import React from "react";
import lightMore from "../assets/IconTextImages/widgets/lightMode/more.svg";
import { ModeState } from "../generals/Types";
import lightNotif from "../assets/IconTextImages/widgets/lightMode/notif.svg";
import darkMore from "../assets/IconTextImages/widgets/darkMode/more.svg";
import darkNotif from "../assets/IconTextImages/widgets/darkMode/Noti.svg";
import SearchBar from "../UI/SearchBar";
import IconText from "./IconText";
import { widgetsContent } from "../data/TopsectionData/WidgetsContent";
import { SubSectionsProps } from "../generals/Types";
import { useTheme } from "./SwitchMode/ThemeContext";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { State } from "../generals/Types";
import Calendar from "./Calender";
import calender from "../assets/IconTextImages/widgets/calendar.svg";
import filter from "../assets/IconTextImages/widgets/filter.svg";
import download from "../assets/IconTextImages/widgets/Download.svg";

type TopSectionProps = {
  sectionTitle: string;
  profileImage: string;
  SubSections: SubSectionsProps[];
  className?: string;
};

const TopSection: React.FC<TopSectionProps> = ({
  sectionTitle,
  profileImage,
  SubSections,
  className,
}) => {
  const { theme } = useTheme();
  // const [gapSpace , setGapSpace] = useState(0);
  const [enabledwidth, setEnabledwidth] = useState(0);
  const [enabledOffset, setEnabledOffset] = useState(0);
  const SubSectionRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    let totalWidthBeforeEnabled = 0;
    let foundEnabled = false;
    let gapSpace = 0;

    SubSections.forEach((item, index) => {
      const element = SubSectionRefs.current[index];

      if (element) {
        if (item.state === "enabled" && foundEnabled === false) {
          setEnabledwidth(element.offsetWidth);
          foundEnabled = true;
        } else if (foundEnabled === false) {
          totalWidthBeforeEnabled += element.offsetWidth;
          gapSpace += 16;
        }
      }
    });

    setEnabledOffset(totalWidthBeforeEnabled + gapSpace);
  }, [SubSections]);

  const enabledColor = theme === "light" ? "#004A99" : "#66B0FF";

  const [isCalendarClicked, setCalenderClicker] = useState<boolean>(false);

  function handleClickCalendar() {
    setCalenderClicker((prevCalenderClicker) => !prevCalenderClicker);
  }

  return (
    <div
      className={`relative md:col-span-12  pt-[32px] ${className ? "" + className : ""}`}
    >
      <div className="flex flex-row items-center justify-between sectionTitle-userItems mb-[32px]">
        <h1 className="font-extrabold text-sxh font-grot text-dark-primary-color dark:text-electric-blue-50">
          {sectionTitle}
        </h1>
        <div className="flex flex-row items-center gap-[32px] searchBar-profileItems">
          <SearchBar size="large" />
          <div className="flex flex-row items-center gap-[8px]">
            <img
              src={theme === "light" ? lightNotif : darkNotif}
              alt="notif"
              className="w-[28px] h-[28px]"
            />
            <Link to="/settings/profile">
              <img
                src={profileImage}
                className={`${theme === "light" ? "border-black" : "border-white"} h-[40px] w-[40px] rounded-full border-[1px] object-cover`}
                alt="profileImage"
              />
            </Link>
            <img
              src={theme === "light" ? lightMore : darkMore}
              alt="more"
              className="w-[28px] h-[28px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-between md:col-span-10  widgets mb-[8px]">
        <div className="contentElements flex flex-row gap-[16px]">
          {SubSections.map((item, index) => {
            return (
              <Link key={index} to={item.textPaths.path}>
                <h3
                  ref={(el) => (SubSectionRefs.current[index] = el)}
                  className={`font-grot font-semibold font-base ${item.state === "enabled" ? "text-electric-blue-700 dark:text-light-disabled-color" : "text-light-disabled-color dark:text-dark-disabled-color"}`}
                >
                  {item.textPaths.text}
                </h3>
              </Link>
            );
          })}
        </div>
        <div className="relative flex flex-row gap-[8px] widgetsItems">
          <div className="relative bg-soft-light-back pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[50px] flex flex-row items-center gap-[8px]">
            <img
              src={calender}
              alt="widgetIcon"
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={handleClickCalendar}
            />
            <h3 className="text-base font-medium whitespace-nowrap text-dark-primary-color font-grot">
              calendar
            </h3>
            {isCalendarClicked === true && (
              <div className="absolute -left-80">
                <Calendar />
              </div>
            )}
          </div>
          <div className="bg-soft-light-back pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[50px] flex flex-row items-center gap-[8px]">
            <img src={filter} alt="widgetIcon" className="w-[20px] h-[20px]" />
            <h3 className="text-base font-medium whitespace-nowrap text-dark-primary-color font-grot">
              filter
            </h3>
          </div>
          <div className="bg-soft-light-back pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[50px] flex flex-row items-center gap-[8px]">
            <img
              src={download}
              alt="widgetIcon"
              className="w-[20px] h-[20px]"
            />
            <h3 className="text-base font-medium whitespace-nowrap text-dark-primary-color font-grot">
              download
            </h3>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[3px] bg-light-disabled-color dark:bg-dark-disabled-color rounded-full">
        <div
          style={{
            width: `${enabledwidth}px`,
            backgroundColor: enabledColor,
            left: `${enabledOffset}px`,
            position: "absolute",
          }}
          className="h-[3px] rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default TopSection;
