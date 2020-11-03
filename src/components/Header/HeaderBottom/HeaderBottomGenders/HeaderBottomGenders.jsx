import React from 'react';
import HeaderBottomGendersItem from './HeaderBottomGendersItem/HeaderBottomGendersItem';
import styles from './../HeaderBottom.module.css';

const HeaderBottomGenders = (props) => {
    return (
        <nav role='menubar' className={styles.header__bottom_genders}>
            <HeaderBottomGendersItem link={'/women-home/?sitelink=topmenuW'} label={'Товары для женщин'} content='Женщинам' />
            <HeaderBottomGendersItem link={'/men-home/?sitelink=topmenuM'} label={'Товары для мужчин'} content='Мужчинам' />
            <HeaderBottomGendersItem link={'/kids-home/?sitelink=topmenuK'} label={'Товары для детей'} content='Детям' />
        </nav>
    )
}


export default HeaderBottomGenders;