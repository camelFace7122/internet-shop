import hanger from './../../../assets/images/hanger.png';
import certificate from './../../../assets/images/certificate.png';
import payment from './../../../assets/images/payment.png';
import HeaderTopItem from './HeaderTopItem/HeaderTopItem';
import HeaderTopGeo from './HeaderTopGeo/HeaderTopGeo';
import styles from './HeaderTop.module.css';
import cn from 'classnames';
import { connect } from 'react-redux';
import { getUserRegion } from '../../../redux/reducers/header-reducer/header-selectors';

const HeaderTop = ({userRegion}) => {
    return (
        <div className={styles.header__top} >
          <div className={cn(styles.header__top_inner, styles.wrapper)}>
            <HeaderTopGeo region={userRegion} />
            <HeaderTopItem link={'/delivery/'} image={hanger} description={'Доставка с примеркой'} alt={'hanger'} />
            <HeaderTopItem link={'/help/podlinnost-produkcii-kz/'} image={certificate} description={'Подлинные товары'} alt={'certificate'} />
            <HeaderTopItem link={'/lp/postoplata'} image={payment} description={'Платите когда хотите'} alt={'payment'} isRed />
          </div>
        </div>
    )
}

let mstp = (state) => {
  return {
    userRegion: getUserRegion(state), 
  }
}

export default connect(mstp, null)(HeaderTop);