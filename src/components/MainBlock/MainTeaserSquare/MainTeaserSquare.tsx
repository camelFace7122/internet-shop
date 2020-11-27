import React, { FC } from 'react';
import cn from 'classnames';
import './MainTeaserSquare.css';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';
import { MainBlockSquareTeaserType } from '../../../types/types';

type PropsType = MainBlockSquareTeaserType

const MainTeaserSquare: FC<PropsType> = ({ float, picture, title, subtitle }) => {
    return (
        <div className={cn('main__teaser_square', float)}>
            <a className="teaser_square" href="https://www.lamoda.kz/c/4153/default-women/?display_locations=all&labels=37353&zbs_content=w_right_1_829640_kz_2910_tiz_w_sale_shoes_upto60">
                <TeaserOverlay>
                    <img src={picture} alt="teaser image" className="teaser_square_image" />
                </TeaserOverlay>
                <div className="teaser_square_text">
                    <p className="teaser_square_text_title">{title}</p>
                    <p className="teaser_square_text_subtitle">{subtitle}</p>
                </div>
            </a>
        </div>
    )
}

export default MainTeaserSquare;