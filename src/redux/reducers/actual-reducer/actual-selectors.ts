import { TeaserItemsType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getWomenTeaserItems = (state: AppStateType): TeaserItemsType => {
    return state.actual.women
}