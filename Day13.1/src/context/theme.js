import { createContext, useContext } from "react";

// similar to userContext in lec13
export const ThemeContext = createContext({
    // default object added
    themeMode: "light",
    darkTheme: () => {},// khali function bas
    lightTheme: () => {},
})

// yehi se hi themecontextprovider export kar diya
export const ThemeProvider = ThemeContext.Provider

// create a custom hook
export default function useTheme(){ // usetheme naam ki custom hook
    return useContext(ThemeContext)
}