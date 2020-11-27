import React, { FC } from 'react';
import {connect} from 'react-redux';
import SeoMenuTabs from './SeoMenuTabs';
import './SeoMenu.css';
import { SeoTabsType } from '../../types/types';
import { AppStateType } from '../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    seoMenuData: SeoTabsType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}


const SeoMenu: FC<PropsType> = ({seoMenuData}) => {
    return (
        <div className="seoMenu">
            <nav className="seoMenu__container wrapper">
                <p className="seoMenu__title">Интернет-магазин одежды, обуви, аксессуаров, косметики и парфюмерии</p>
                <SeoMenuTabs seoMenuData={seoMenuData} />
            </nav>
        </div>
    )
}

const mstp = (state: AppStateType) => {
    return {
        seoMenuData: state.seoMenu.seoTabs,
    }
}
const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(SeoMenu);