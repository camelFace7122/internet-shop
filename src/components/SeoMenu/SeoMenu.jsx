import React from 'react';
import {connect} from 'react-redux';
import SeoMenuTabs from './SeoMenuTabs';
import './SeoMenu.css';


const SeoMenu = ({seoMenuData}) => {
    return (
        <div className="seoMenu">
            <nav className="seoMenu__container wrapper">
                <p className="seoMenu__title">Интернет-магазин одежды, обуви, аксессуаров, косметики и парфюмерии</p>
                <SeoMenuTabs seoMenuData={seoMenuData} />
            </nav>
        </div>
    )
}

const mstp = (state) => {
    return {
        seoMenuData: state.seoMenu.seoTabs,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(SeoMenu);