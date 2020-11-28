import { Action } from 'redux';
import initialState, { InitialStateType } from './wideCarousel-state';

const wideCarouselReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default wideCarouselReducer;
