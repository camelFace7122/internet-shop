import { WideCarouselItemsType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getWomenWideCarouselItems = (state: AppStateType): WideCarouselItemsType => {
    return state.wideCarousel.women
}