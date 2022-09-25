import { useTheme } from 'shared/lib/theme';
import { classNames } from 'shared/lib/classnames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import classes from './App.module.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames(classes.app, {}, [theme])}>
            <Navbar />
            <div className={classNames(classes.content)}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
