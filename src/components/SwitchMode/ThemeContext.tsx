import React , {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {ModeState} from "../../generals/Types"

export type ThemeContextProps = {
    theme : ModeState ,
    toggleTheme: ()=> void ;
}

type ThemeProviderProps = {
    children : ReactNode;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const ThemeProvider: React.FC<ThemeProviderProps>= ({children}) => {
    const [theme, setTheme] = useState<ModeState>('light');

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme') as ModeState | null;

        if(savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
        else {
            document.documentElement.classList.add('theme', 'light');
        }
    },[]);


    const toggleTheme = () => { 
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme)
        localStorage.setItem('theme' , newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
                {children}
        </ThemeContext.Provider>
    )


};


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("usetheme must be within a ThemeProvider")
    }

    return context;
}