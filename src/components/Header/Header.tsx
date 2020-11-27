import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import styles from './Header.module.css';
import { FC } from 'react';

type PropsType = {}

const Header: FC<PropsType> = (props) => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}

export default Header;