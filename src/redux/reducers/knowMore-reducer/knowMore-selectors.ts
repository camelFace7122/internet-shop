import { KnowMoreItemsType } from "../../../types/types";
import { AppStateType } from "../../store";

export const getWomenKnowMoreItems = (state: AppStateType): KnowMoreItemsType => {
    return state.knowMore.women;
}