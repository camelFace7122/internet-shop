import { FooterType } from '../../../types/types';
import { footer } from '../../database';

let initialState = {
    footer: footer as FooterType,
}

export type InitialStateType = typeof initialState

export default initialState;