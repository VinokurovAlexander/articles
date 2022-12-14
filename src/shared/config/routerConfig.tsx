import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const AppRoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
};


export const routeConfig: RouteProps[] = [
    {
        path: AppRoutePath.main,
        element: <MainPage />
    },
    {
        path: AppRoutePath.about,
        element: <AboutPage />
    },
    {
        path: AppRoutePath['not-found'],
        element: <NotFoundPage />
    }
];
