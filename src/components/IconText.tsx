import { SizeState } from "../generals/Types";
import { ImageText } from "../generals/Types";
import React from "react";
import { useTheme } from "../components/SwitchMode/ThemeContext";

type IconTextProps = {
  size: SizeState;
  state: "enabled" | "disabled" | "widget" | "container" | "label" | "search";
  textImage: ImageText;
  className?: string;
};

const IconText: React.FC<IconTextProps> = ({
  size,
  state,
  textImage,
  className,
}) => {
  const { theme } = useTheme();

  function mapState(
    _state: "enabled" | "disabled" | "widget" | "container" | "search" | "label"
  ) {
    switch (_state) {
      case "enabled":
        return "text-light-back text-lg font-medium";
      case "disabled":
        if (theme === "light") {
          return "text-light-disabled-color text-lg font-medium";
        } else {
          return "text-dark-disabled-color text-lg font-medium";
        }

      case "widget":
        return "text-dark-primary-color text-base font-medium";
      case "container":
        return "text-container-text-color text-lg  font-medium";
      case "label":
        return "text-dark-back text-base font-semibold";
      case "search":
        return "text-dark-back text-sm font-regular opacity-40";
    }
  }

  function mapSize(_size: "small" | "mid" | "large" | "largemid") {
    switch (_size) {
      case "small":
        return "w-[11px] h-[11px]";
      case "mid":
        return "w-[20px] h-[20px]";
      case "large":
        return "w-[28px] h-[28px]";
    }
  }

  return (
    <div
      className={`flex flex-row gap-[8px] items-center ${className ? className : ""}`}
    >
      <img src={textImage.image} alt="icon" className={mapSize(size)} />

      <h1 className={`whitespace-nowrap ${mapState(state)}`}>
        {textImage.text}
      </h1>
    </div>
  );
};

export default IconText;
