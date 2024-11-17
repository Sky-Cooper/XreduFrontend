import React from "react";
import { useTheme } from "./ThemeContext";
import "./SwitchModeInput.css";

type ToggleThemeProps = {
  className?: string;
};

const DarkMode: React.FC<ToggleThemeProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${className ? "" + className : ""}  switch_mode_input`}>
      <input type="checkbox" id="toggle" onClick={toggleTheme} />
    </div>
  );
};

export default DarkMode;
