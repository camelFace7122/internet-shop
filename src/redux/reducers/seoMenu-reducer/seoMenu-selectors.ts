import { SeoTabsType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getSeoTabs = (state: AppStateType): SeoTabsType => {
    return state.seoMenu.seoTabs
}