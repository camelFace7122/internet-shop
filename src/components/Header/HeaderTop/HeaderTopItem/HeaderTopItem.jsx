import styles from './HeaderTopItem.module.css';
import cn from 'classnames';
import CustomTooltip from '../../../common/MaterialUI/CustomTooltip';
import HeaderTopItemTip from './HeaderTopItemTip';

const HeaderTopItem = ({link, image, description, alt, isRed, tipText}) => {
    return (
        <CustomTooltip content={<HeaderTopItemTip tipText={tipText}/>} arrow={false} placement={'bottom-end'}>
            <a className={cn(styles.header__top_item, {[styles.header__top_item_payment_time]: isRed})} href={link} target='_blank'>
                <img src={image} alt={alt} />
                <span>{description}</span>
            </a>
        </CustomTooltip>
    )
}

export default HeaderTopItem;