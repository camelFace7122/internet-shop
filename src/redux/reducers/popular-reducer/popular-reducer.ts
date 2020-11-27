import initialState, {InitialStateType} from './popular-state';

const popularReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default popularReducer;
