import React, { FC } from 'react'; 
import Slider from 'react-slick';
import cn from 'classnames';
import MainBannerItem from './MainBannerItem';
import './MainBanner.css';
import { TeaserItemsType } from '../../../types/types';

type PropsType = {
    float: 'left' | 'right'
    items: TeaserItemsType
}

const MainBanner: FC<PropsType> = ({float, items}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
    }
    let bannerItems = items.map((item)=> {
        return (
            <MainBannerItem {...item} />
        )
    })

    return (
        <div className={cn('main__banner', float)}>
            <Slider {...settings}>
                {bannerItems}
            </Slider>
        </div>
    )
}

export default MainBanner;