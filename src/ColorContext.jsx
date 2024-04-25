import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.theme)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode('dark')
          } else {
            setDarkMode('light')
          }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme',darkMode) 
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={[
            darkMode,
            setDarkMode
        ]}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeValue = () => {
    const fullContext = useContext(ThemeContext)
    return fullContext[0]
}

export const useThemeSetter = () => {
    const fullContext = useContext(ThemeContext)
    return fullContext[1]
}