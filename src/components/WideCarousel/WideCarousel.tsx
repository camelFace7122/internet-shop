import React, { FC } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import WideCarouselItem from './WideCarouselItem';
import { WideCarouselItemsType } from '../../types/types';

import './WideCarousel.css';
import { AppStateType } from '../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    women: WideCarouselItemsType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const WideCarousel: FC<PropsType> = ({women}) => {
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

const mstp = (state: AppStateType) => {
    return {
        women: state.wideCarousel.women,
    }
}
const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(WideCarousel);