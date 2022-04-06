
import React, { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/GlobalStyles";
import { lightTheme, darkTheme } from "../themes/Theme";
import { FiSun, FiMoon } from "react-icons/fi";
import TemplateDefault from "../templates/TemplateDefault";

const Layout = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />;

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <TemplateDefault >

                {children}
            </TemplateDefault>
        </ThemeProvider>
    );
};

export default Layout;