import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const time = (new Date()).getHours();
        if(time >= 7 && time <= 19) {
            return 'light';
        }
        else {
            return 'dark';
        }
    });

    return (
        <ThemeContext.Provider
        value={{
            theme,
            toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        }}
        >
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);