import { createContext,useContext } from "react";

export const ThemeContext = createContext({
     themeMode:"light",
     darkTheme:()=>{},
     lightTheme:()=>{}
})

export const ThemeProvider =ThemeContext.Provider

// useTheme is a custom theme hook
export default function useTheme(){
     return useContext(ThemeContext)
}