import hanger from './../../../assets/images/hanger.png';
import certificate from './../../../assets/images/certificate.png';
import payment from './../../../assets/images/payment.png';
import HeaderTopItem from './HeaderTopItem/HeaderTopItem';
import HeaderTopGeo from './HeaderTopGeo/HeaderTopGeo';
import styles from './HeaderTop.module.css';
import cn from 'classnames';
import { FC } from 'react';

type PropsType = {}

const HeaderTop: FC<PropsType> = (props) => {
    let deliveryTipText =  `Хотите посмотреть, как вещь на вас сидит, или сравнить два размера?
    Воспользуйтесь доставкой с примеркой.
    Вы заплатите только за то, что вам подходит, а остальные товары мы вернём на склад.`;
    let certifiedTipText = `Все товары - подлинные. Подтвердим сертификатами производителей.`;
    let paymentTipText = `Lamoda предлагает два варианта оплаты заказа: онлайн-оплата на сайте и в 
    приложении Lamoda при оформлении заказа и оплата при получении заказа.`

    return (
        <div className={styles.header__top} >
          <div className={cn(styles.header__top_inner, styles.wrapper)}>
            <HeaderTopGeo />
            <HeaderTopItem link={'/delivery/'} image={hanger} description={'Доставка с примеркой'} alt={'hanger'} tipText={deliveryTipText} />
            <HeaderTopItem link={'/help/podlinnost-produkcii-kz/'} image={certificate} description={'Подлинные товары'} alt={'certificate'} tipText={certifiedTipText} />
            <HeaderTopItem link={'/lp/postoplata'} image={payment} description={'Платите когда хотите'} alt={'payment'} isRed tipText={paymentTipText} />
          </div>
        </div>
    )
}

export default HeaderTop;