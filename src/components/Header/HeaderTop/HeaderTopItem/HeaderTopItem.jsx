import styles from './HeaderTopItem.module.css';
import cn from 'classnames';

const HeaderTopItem = ({link, image, description, alt, isRed}) => {
    return (
        <a className={cn(styles.header__top_item, {[styles.header__top_item_payment_time]: isRed})} href={link} target='_blank'>
            <img src={image} alt={alt} />
            <span>{description}</span>
        </a>
    )
}

export default HeaderTopItem;