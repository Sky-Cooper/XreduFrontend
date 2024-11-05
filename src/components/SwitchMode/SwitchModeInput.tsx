import React from 'react'
import {useTheme} from "./ThemeContext"
import "./SwitchModeInput.css"


const DarkMode: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className='switch_mode_input'>
            <input type="checkbox" id="toggle" onClick={toggleTheme}/>
                

            

        </div>
    )
}

export default DarkMode 