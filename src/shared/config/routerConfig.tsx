import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const AppRoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};


export const routeConfig: RouteProps[] = [
    {
        path: AppRoutePath.main,
        element: <MainPage />
    },
    {
        path: AppRoutePath.about,
        element: <AboutPage />
    }
];