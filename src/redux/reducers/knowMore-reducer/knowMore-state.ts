import { KnowMoreItemsType } from '../../../types/types';
import { womenKnowMoreItems as WKNI } from '../../database';

let initialState = {
    women: [
        WKNI.knowMoreItem1, WKNI.knowMoreItem2, WKNI.knowMoreItem3, WKNI.knowMoreItem4
    ] as KnowMoreItemsType
}

export type InitialStateType = typeof initialState


export default initialState;