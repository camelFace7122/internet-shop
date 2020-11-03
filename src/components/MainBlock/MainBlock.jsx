import React from 'react';
import {connect} from 'react-redux';

import MainBanner from './MainBanner/MainBanner';
import MainTeaserLong from './MainTeaserLong/MainTeaserLong';
import MainTeaserSquare from './MainTeaserSquare/MainTeaserSquare';

import './MainBlock.css';


const MainBlock = ({banners, squareTeasers, longTeasers}) => {
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

const mstp = (state) => {
    return {
        banners: state.mainBlock.banners,
        squareTeasers: state.mainBlock.squareTeasers,
        longTeasers: state.mainBlock.longTeasers,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(MainBlock);