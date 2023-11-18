import React from 'react';
import { WebRoutes } from '../WebRoutes';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';


const Navigation = () => {
    return (
        <div className={styles.navDiv}>
            {
                WebRoutes.map(({ title, id, path }) => {
                    return (
                        title && <NavLink className={({ isActive }) => (isActive ? 'active' : 'navlink')}
                            key={id}
                            to={path}>
                            {title}
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default Navigation