import React, { FC, KeyboardEvent, useEffect, useState } from 'react';
import {Field, WrappedFieldProps} from 'redux-form';
import cn from 'classnames';
import { connect } from 'react-redux';
import {resetInput, ResetInputActionType} from '../../../redux/reducers/header-reducer/header-reducer';
import {giveFocusStateOfInput} from '../../../redux/reducers/widgets-reducer/widgets-reducer';
import { InputHelpersType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';
import {ValidatorType} from './../../../utils/validators/validators'

import './FormControls.css';
import { Action } from 'redux';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {}
    
type MapDispatchToPropsType = {
    resetInput: (field: string) => ResetInputActionType
    giveFocusStateOfInput: (focusState?: boolean) => Action
}

type OwnPropsType = {
    tag: string
    el: string
    helpers?: InputHelpersType
    type?: string
    autoComplete?: string
    handleInputKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void 
} & WrappedFieldProps   

const FormControl: FC<PropsType> = ({input, meta, tag, el, helpers, type, resetInput, 
                                     autoComplete, giveFocusStateOfInput, handleInputKeyPress, ...restProps}) => {
    const [passwordIsHidden, setPasswordIsHidden] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (el && el !== 'locationInput') {
            setHasError(meta.dirty && meta.error || meta.touched && meta.error);
        } else {
            setHasError(meta.dirty && meta.error);
        }
    }, undefined)

    useEffect(() => {
        giveFocusStateOfInput(meta.active);
    }, [meta.active])

    let inputRef: React.RefObject<any> = React.createRef();

    const togglePasswordHider = () => {
        setPasswordIsHidden(!passwordIsHidden);
    }
    const resetHandler = () => {
        resetInput(inputRef.current.name);
    }

    let focusedDropdownItem = document.querySelector('.region-modal__dropdown-list li:focus');

    return (
        <>
            <div className={cn('form__control', {['hasError']: hasError, ['focused']: !hasError && meta.active || focusedDropdownItem})} >
                {(helpers && !helpers.passwordHider || !helpers) && 
                    React.createElement(tag, {ref: inputRef, type: type, onKeyDown: handleInputKeyPress, autoComplete: autoComplete ? autoComplete : 'on', ...input, ...restProps})}
                {helpers && helpers.passwordHider && 
                    React.createElement(tag, {ref: inputRef, type: passwordIsHidden ? type : 'text', ...input, ...restProps})
                }
                {helpers && 
                    <div className="form__control-helpers">
                        {helpers.reset &&
                        <div className="reset-input" onClick={resetHandler}>
                            <div className={cn('reset-icon', {['show-reset-icon']: meta.dirty})}></div>
                        </div>}                        {helpers.passwordHider &&
                        <div className={cn({['hide-password']: passwordIsHidden, ['show-password']: !passwordIsHidden})} onClick={togglePasswordHider}>
                            <div className="passwordHider-icon"></div>
                        </div>}
                    </div>
                }
            </div>

            {(hasError) && <span className="form__control-validation-error">{meta.error}</span>}
        </>
    )
}

let FormControlContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(null, {
    resetInput,
    giveFocusStateOfInput
})(FormControl);

export const EmailInput: FC<WrappedFieldProps> = (props) => {
    return <FormControlContainer tag='input' el='emailInput' helpers={{reset: true}} type='email' {...props} />
}

export const PasswordInput: FC<WrappedFieldProps> = (props) => {
    return <FormControlContainer tag='input' el='passwordInput' helpers={{reset: true, passwordHider: true}} type='password' {...props} />
}

export const LocationInput: FC<WrappedFieldProps> = (props) => {
    const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        let listItemsArray: NodeListOf<HTMLElement> = document.querySelectorAll('.region-modal__dropdown-list li')
        if (e.key == 'ArrowDown') {
            listItemsArray[0].focus();
        }
        if (e.key == 'ArrowUp') {
            listItemsArray[listItemsArray.length - 1].focus();
        }
    }

    return <FormControlContainer tag='input' el='locationInput' type='text' {...props} autoComplete='off' handleInputKeyPress={handleInputKeyPress} />
}

export function createField<FormKeysType extends string>(placeholder: string | undefined, fieldName: FormKeysType, validators: Array<ValidatorType | undefined>, 
                            component: FC<WrappedFieldProps> | React.Component<WrappedFieldProps> | string, customClass?: string) {
    return (
        <Field name={fieldName} placeholder={placeholder} validate={[...validators]} component={component} className={customClass} />
    )
}

type FormErrorPropsType = {
    error?: string | null
} 

export const FormError: FC<FormErrorPropsType> = ({error}) => {
    return (
        <div className={'formSummaryError'}>  
            {error}
        </div>
    )
}


