import { womenWideCarouselItems as WWCI } from '../../database';
import { WideCarouselItemsType } from '../../../types/types';


let initialState = {
    women: [
        WWCI.wideCarouselItem1,
        WWCI.wideCarouselItem2,
    ] as WideCarouselItemsType
}

export type InitialStateType = typeof initialState

export default initialState;