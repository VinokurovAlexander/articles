import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import { AboutPage } from './pages/AboutPage';
import { MainPage } from "./pages/MainPage";

export const App = () => (
    <div className="app">
        <NavLink to="/">
            Main
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
        <React.Suspense fallback={<span>loading...</span>}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </React.Suspense>

    </div>
)