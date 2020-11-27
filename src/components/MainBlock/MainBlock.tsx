import React, { FC } from 'react';
import {connect} from 'react-redux';

import MainBanner from './MainBanner/MainBanner';
import MainTeaserLong from './MainTeaserLong/MainTeaserLong';
import MainTeaserSquare from './MainTeaserSquare/MainTeaserSquare';
import { MainBlockBannersType, MainBlockSquareTeasersType } from '../../types/types';

import './MainBlock.css';
import { AppStateType } from '../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    banners: MainBlockBannersType
    squareTeasers: MainBlockSquareTeasersType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const MainBlock: FC<PropsType> = ({banners, squareTeasers}) => {
    let mainBanners = banners.map(banner => {
        return <MainBanner float={banner.float} items={banner.items} />
    }) 
    let mainSquareTeasers = squareTeasers.map(teaser => {
        return <MainTeaserSquare {...teaser} />
    })

    return (
        <main className="main wrapper">
            {mainBanners[0]}
            {mainSquareTeasers[0]}
            {mainSquareTeasers[1]}

            <MainTeaserLong link={'https://www.lamoda.kz/c/4153/default-women/?display_locations=all&labels=37353&zbs_content=w_right_1_829640_kz_2910_tiz_w_sale_shoes_upto60'} />

            {mainBanners[1]}
            {mainSquareTeasers[2]}
            {mainSquareTeasers[3]}
        </main>
    )
}

const mstp = (state: AppStateType) => {
    return {
        banners: state.mainBlock.banners,
        squareTeasers: state.mainBlock.squareTeasers,
    }
}

const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(MainBlock);