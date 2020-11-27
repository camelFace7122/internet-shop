import { MainBlockBannersType, MainBlockSquareTeasersType } from "../../../types/types";
import { AppStateType } from "../../store";

export const getMainBlockBanners = (state: AppStateType): MainBlockBannersType => {
    return state.mainBlock.banners;
}

export const getMainBlockSquareTeasers = (state: AppStateType): MainBlockSquareTeasersType => {
    return state.mainBlock.squareTeasers;
}
    