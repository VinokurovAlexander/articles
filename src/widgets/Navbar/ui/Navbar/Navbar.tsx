import { NavLink } from "../NavLink";
import { AppRoutePath } from "shared/config/routerConfig";
import classes from './Navbar.module.scss';

const Navbar = () => (
    <div className={classes.navbar}>
        {Object.entries(AppRoutePath).map(([title, path]) =>
            <NavLink to={path} key={path}>{title}</NavLink>
        )}
    </div>
)

export default Navbar;