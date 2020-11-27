import React, { FC } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import PopularItem from './PopularItem';
import { connect } from 'react-redux';
import { ClothesItemsType } from '../../types/types';
import { AppStateType } from '../../redux/store';

import './PopularSection.css';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    women: ClothesItemsType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

SwiperCore.use([Navigation]);

const PopularSection: FC<PropsType> = ({women}) => {

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

const mstp = (state: AppStateType) => {
    return {
        women: state.popular.women,
    }
}
const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(PopularSection);