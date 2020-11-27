import { womenTeaserItems as WTI } from '../../database';
import { TeaserItemsType } from '../../../types/types';

let initialState = {
    women: [
        WTI.teaserItem9, WTI.teaserItem10, WTI.teaserItem11
    ] as TeaserItemsType
}

export type InitialStateType = typeof initialState;

export default initialState;