import { ClothesItemsType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getPopularClothesWomenItems = (state: AppStateType): ClothesItemsType => {
    return state.popular.women
}