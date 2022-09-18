import { Suspense } from 'react';
import { NavLink } from "react-router-dom";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";


export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavLink to="/">
                Main
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <button onClick={toggleTheme}>Theme toggle</button>
            <Suspense fallback={<span>loading...</span>}>
                <AppRouter />
            </Suspense>
        </div>
    )
}
