import { FC } from 'react';
import { NavLink as BaseNavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames';
import classes from './NavLink.module.scss';

const NavLink: FC<NavLinkProps> = (props) => {
    const { to, children } = props;

    return (
        <BaseNavLink
            to={to}
            className={({ isActive }) => classNames(classes.navlink, { [classes.active]: isActive })}
        >
            {children}
        </BaseNavLink>
    );
};

export default NavLink;
