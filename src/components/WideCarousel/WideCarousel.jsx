import React from 'react';
import Slider from 'react-slick';
import WideCarouselItem from './WideCarouselItem';

import './WideCarousel.css';
import { connect } from 'react-redux';

const WideCarousel = ({women}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
    }
    let wideCarouselItems = women.map(item => {
        return (
            <WideCarouselItem {...item} />
        )
    })
    return (
        <div className="wideCarousel">
            <div className="wideCarousel__container wrapper">
                <Slider {...settings}>
                    {wideCarouselItems}
                </Slider>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        women: state.wideCarousel.women,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(WideCarousel);