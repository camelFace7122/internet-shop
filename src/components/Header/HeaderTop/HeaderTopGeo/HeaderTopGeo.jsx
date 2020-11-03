import styles from './HeaderTopGeo.module.css'

const HeaderTopGeo = ({region}) => {
    return (
        <div className={styles.header__top_geo}>
            <div className={styles.header__redDot}>
            </div>
            <div className={styles.header__location}>
            Ваш регион доставки:
            {' ' + region}
            </div>
        </div>
    )
}

export default HeaderTopGeo;