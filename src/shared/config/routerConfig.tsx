import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

const RoutePath: Record<AppRoutes, any> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}


export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]