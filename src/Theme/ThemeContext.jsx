import {createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext();



const ThemeProvider = ({children}) => {
    const[darkMode, setDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("theme")) || false;
    })

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
    },[darkMode]);

  return (
    <ThemeContext.Provider value ={{darkMode, setDarkMode}}>
    <div className={darkMode ? "bg-dark text-white " : "bg-light text-dark"}>
        {children}
    </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
