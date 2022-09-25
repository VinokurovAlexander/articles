import { FC } from 'react';
import { classNames } from 'shared/lib/classnames';
import classes from './Loader.module.scss';

interface Loader {
    className?: string;
}

const Loader: FC<Loader> = ({ className }) => (
    <div className={classNames(classes.loader, {}, [className])}>
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
    </div>
);

export default Loader;