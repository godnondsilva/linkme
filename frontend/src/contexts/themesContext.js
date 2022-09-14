import { createContext, useState } from "react";

export const ThemesContext = createContext({
    themes: {},
    setThemes: () => { }
})

export const ThemesProvider = ({ children }) => {
    const [themes, setThemes] = useState([]);
    const value = { themes, setThemes }

    return <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
}