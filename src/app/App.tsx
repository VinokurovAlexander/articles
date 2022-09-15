import { Suspense } from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";


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
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
