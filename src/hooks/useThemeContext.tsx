import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider")
    };
    return context
}

export default useThemeContext