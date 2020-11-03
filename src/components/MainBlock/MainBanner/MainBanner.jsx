import React from 'react'; 
import Slider from 'react-slick';
import cn from 'classnames';
import MainBannerItem from './MainBannerItem';
import './MainBanner.css';


const MainBanner = ({float, items}) => {
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