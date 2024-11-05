import React from "react";
import { ModeState } from "../generals/Types";
import { UserRole } from "../generals/Types";
import { SideBarContent } from "../data/generalData/SideBarContent";
import IconText from "../components/IconText";
import xredulogo from "../assets/IconTextImages/Xredu logo.svg";
import SwitchModeInput from "../components/SwitchMode/SwitchModeInput";
import { useLocation } from "react-router-dom";
import { useTheme } from "../components/SwitchMode/ThemeContext";
import { Link } from "react-router-dom";
import { RoleBasedSections } from "../data/generalData/RoleBasedSections";

//TODO : find a solution where to link each IconText element to its own root

type SideBarProps = {
  userRole: UserRole;
  className?: string;
};

const SideBar: React.FC<SideBarProps> = ({ userRole, className }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`${className ? "" + className : ""} w-[206px] fixed top-0 left-0 mt-[32px] flex justify-center items-center h-[calc(100vh-64px)] rounded-tr-lg rounded-br-lg  bg-light-primary-color dark:bg-dark-primary-color transition-all duration-400`}
    >
      <div className="h-[calc(100%-128px)] flex flex-col items-center">
        <img src={xredulogo} className="mb-[64px] h-[60px] w-[100px]" />
        <ul className="flex flex-col gap-[16px] justify-center mb-[16px]">
          {SideBarContent[userRole].map((item, index) => {
            const isCurrentPath = currentPath.includes(item.text.toLowerCase());
            return (
              <li key={index}>
                <Link to={item.path}>
                  <IconText
                    textImage={{
                      image: isCurrentPath
                        ? item.icons.lightEnabled
                        : theme === "light"
                          ? item.icons.lightDisabled
                          : item.icons.darkDisabled,
                      text: item.text,
                    }}
                    state={isCurrentPath ? "enabled" : "disabled"}
                    size="large"
                    className={item.text === "Report" ? "mb-[64px]" : ""}
                  />
                </Link>
              </li>
            );
          })}
          <SwitchModeInput />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
