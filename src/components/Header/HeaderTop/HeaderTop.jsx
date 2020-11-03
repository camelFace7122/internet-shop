import hanger from './../../../assets/images/hanger.png';
import certificate from './../../../assets/images/certificate.png';
import payment from './../../../assets/images/payment.png';
import HeaderTopItem from './HeaderTopItem/HeaderTopItem';
import HeaderTopGeo from './HeaderTopGeo/HeaderTopGeo';
import styles from './HeaderTop.module.css';
import cn from 'classnames';

const HeaderTop = (props) => {
    return (
        <div className={styles.header__top} >
          <div className={cn(styles.header__top_inner, styles.wrapper)}>
            <HeaderTopGeo region={'г.Атырау'} />
            <HeaderTopItem link={'/delivery/'} image={hanger} description={'Доставка с примеркой'} alt={'hanger'} />
            <HeaderTopItem link={'/help/podlinnost-produkcii-kz/'} image={certificate} description={'Подлинные товары'} alt={'certificate'} />
            <HeaderTopItem link={'/lp/postoplata'} image={payment} description={'Платите когда хотите'} alt={'payment'} isRed />
          </div>
        </div>
    )
}

export default HeaderTop;