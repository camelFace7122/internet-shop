import { MainBlockBannersType, MainBlockSquareTeasersType } from '../../../types/types';
import {womenTeaserItems as WTI} from '../../database';

let initialState = {
    banners: [
        {   
            float: 'left',
            items: [
                WTI.teaserItem1,
                WTI.teaserItem2
            ]
        },
        {
            float: 'right',
            items: [
                WTI.teaserItem3,
                WTI.teaserItem4
            ]
        },
    ] as MainBlockBannersType,
    squareTeasers: [
        {
            float: 'right',
            ...WTI.teaserItem5
        },
        {
            float: 'right',
            ...WTI.teaserItem6
        },
        {
            float: 'left',
            ...WTI.teaserItem7
        },
        {
            float: 'left',
            ...WTI.teaserItem8
        },
    ] as MainBlockSquareTeasersType,
}

export type InitialStateType = typeof initialState

export default initialState;