import { Suspense } from 'react';
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";


export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Theme toggle</button>
            <Suspense fallback={<span>loading...</span>}>
                <AppRouter />
            </Suspense>
        </div>
    )
}
