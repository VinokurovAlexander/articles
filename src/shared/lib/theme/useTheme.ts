import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme, LOCAL_STORAGE_THEME_KEY } from './const';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
};
