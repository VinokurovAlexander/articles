import {Theme, useTheme} from "shared/lib/theme";
import DarkIcon from '../assets/dark.svg';
import LightIcon from '../assets/light.svg';
import { classNames } from "shared/lib/classnames";
import classes from './ThemeSwithcer.module.scss';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={classNames(classes['theme-switcher'])}>
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </button>
    )
};

export default ThemeSwitcher;