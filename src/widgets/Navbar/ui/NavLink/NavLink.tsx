import { FC } from 'react';
import { NavLink as BaseNavLink, NavLinkProps} from "react-router-dom";
import { classNames } from "shared/lib";
import classes from './NavLink.module.scss';


interface LinkProps extends NavLinkProps {}

const NavLink: FC<LinkProps> = (props) => {
    const { to, children } = props;

    return (
        <BaseNavLink
            to={to}
            className={({ isActive }) => classNames(classes.navlink, { [classes.active]: isActive })}
        >
            {children}
        </BaseNavLink>
    )
};

export default NavLink;