import { NavLink } from '../NavLink';
import { AppRoutePath, AppRoutes } from 'shared/config/routerConfig';
import { ThemeSwitcher } from '../ThemeSwitcher';
import classes from './Navbar.module.scss';

const Navbar = () => (
    <div className={classes.navbar}>
        <ThemeSwitcher />
        <div className={classes.links}>
            {Object.entries(AppRoutePath).map(route => {
                const [title, path] =  route;

                if (title !== AppRoutes.NOT_FOUND) {
                    return <NavLink to={path} key={path}>{title}</NavLink>;
                }
            })}
        </div>
    </div>
);

export default Navbar;
