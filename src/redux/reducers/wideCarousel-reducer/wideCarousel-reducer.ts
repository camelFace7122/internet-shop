import initialState, { InitialStateType } from './wideCarousel-state';

const wideCarouselReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default wideCarouselReducer;
