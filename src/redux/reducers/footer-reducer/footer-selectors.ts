import { FooterType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getFooter = (state: AppStateType): FooterType => {
    return state.footer.footer
}