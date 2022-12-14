import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from 'shared/lib/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState(defaultTheme);

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
