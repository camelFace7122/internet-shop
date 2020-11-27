import { womenClothes as WC } from '../../database';
import { ClothesItemsType } from '../../../types/types';

let initialState = {
    women: [
        WC.item1, WC.item2, WC.item3, WC.item4, WC.item5, WC.item6, WC.item7, WC.item8, WC.item9, WC.item10, 
        WC.item11, WC.item12, WC.item13, WC.item14, WC.item15, WC.item16, WC.item17, WC.item18, WC.item19, 
        WC.item20, WC.item21, WC.item22, WC.item23, WC.item24, WC.item25, WC.item26, WC.item27, WC.item28, 
        WC.item29, WC.item30,
    ] as ClothesItemsType
}

export type InitialStateType = typeof initialState

export default initialState;