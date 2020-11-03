import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import cn from 'classnames';
import styles from './../../HeaderBottom.module.css';

const HeaderBottomGendersItem = ({link, label, content, location}) => {
    return (
        <NavLink role='menuitem' to={link} aria-label={label} 
            className={cn(styles.header__bottom_genders_item, {[styles.item_active]: (location.pathname === '/' 
                                                                                    || location.pathname !== '/men-home/' 
                                                                                    && location.pathname !== '/men-home'
                                                                                    && location.pathname !== '/kids-home/'
                                                                                    && location.pathname !== '/kids-home'
                                                                                    && location.pathname !== '/women-home'
                                                                                    && location.pathname !== '/women-home/') 
                                                                                    && link.startsWith('/women-home/') })}
            activeClassName={styles.item_active}>
                {content}
        </NavLink>
    )
}

export default withRouter(HeaderBottomGendersItem);