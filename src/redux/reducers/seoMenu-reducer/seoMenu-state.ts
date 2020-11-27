import { seoTabs } from '../../database';
import { SeoTabsType } from '../../../types/types';

let initialState = {
    seoTabs: [
        ...seoTabs,
    ] as SeoTabsType
}

export type InitialStateType = typeof initialState

export default initialState;