import { useState } from 'react';
import { classNames } from 'shared/lib/classnames';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(classes.sidebar, { [classes.collapsed]: collapsed })}>
            <button onClick={toggleSidebar}>toggle</button>
        </div>
    );
};

export default Sidebar;