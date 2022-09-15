import { Suspense } from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import { AboutPage } from './pages/AboutPage';
import { MainPage } from "./pages/MainPage";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

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
