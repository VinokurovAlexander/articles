import React from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme,  } from "app/providers/theme/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState(defaultTheme);

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;