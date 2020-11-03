import {womenTeaserItems as WTI} from './../../database';

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
    ],

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
    ],

    longTeasers: [
    ]
}

export default initialState;