import { ComponentProps } from "react";
import { ModeState } from "../generals/Types";
import { SizeState } from "../generals/Types";

type ButtonProps = {
  size: SizeState;
} & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  const _className = className;
  const _midPadding = "pt-[8px] pb-[8px] pr-[16px] pl-[16px]";
  const _extraPadding = "pt-[16px] pb-[16px] pr-[32px] pl-[32px]";

  function mapSize(_size: "small" | "mid" | "large") {
    switch (_size) {
      case "small":
        return `text-sm font-regular font-grot ${_midPadding}`;
      case "mid":
        return `text-base font-bold font-grot ${_midPadding}`;
      case "large":
        return `text-base font-extrabold font-grot ${_extraPadding}`;
    }
  }

  return (
    <button
      className={`rounded-[10px] flex justify-center items-center ${mapSize(size)}
        ${_className ? "" + className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
