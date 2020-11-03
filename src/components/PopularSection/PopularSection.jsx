import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import PopularItem from './PopularItem';
import { connect } from 'react-redux';

import './PopularSection.css';

SwiperCore.use([Navigation]);

const PopularSection = ({women}) => {

    let popularMenItems = women.map(item => {
        return (
            <SwiperSlide>
                <PopularItem {...item} />
            </SwiperSlide>
        )
    })

    return (
        <div className="popular wrapper">
            <p className="popular__title">Популярное</p>
            <div className="popular__swiper">
                <button className="swiper-button swiper-button-prev"></button>
                <button className="swiper-button swiper-button-next"></button>
                <Swiper  
                slidesPerView={6}
                spaceBetween={18}
                slidesPerGroup={6}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}>
                    {popularMenItems}
                </Swiper>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        women: state.popular.women,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(PopularSection);