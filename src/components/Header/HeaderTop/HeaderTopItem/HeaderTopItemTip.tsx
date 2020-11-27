import React, { FC } from 'react';
import cn from 'classnames';
import styles from './HeaderTopItem.module.css';

type PropsType = {
    tipText: string
}

const HeaderTopItemTip: FC<PropsType> = ({tipText}) => {

    return (
            <a href="#" className={cn(styles.headerTopItemTip, 'custom-tooltip-text')}>
                {tipText}
                <a href="#" className={'custom-tooltip-link blue-tip-link'}>Подробнее</a>
            </a>
    )
}

export default HeaderTopItemTip;