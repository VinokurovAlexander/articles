import { Suspense } from 'react';
import { useTheme } from "shared/lib/theme";
import { classNames } from "shared/lib/classnames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback={<span>loading...</span>}>
                <AppRouter />
            </Suspense>
        </div>
    )
}
