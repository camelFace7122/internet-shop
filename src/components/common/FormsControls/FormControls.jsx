import React, { useEffect, useState } from 'react';
import {Field} from 'redux-form';
import cn from 'classnames';
import { connect } from 'react-redux';
import {resetInput} from './../../../redux/reducers/header-reducer/header-reducer';
import {giveFocusStateOfInput} from './../../../redux/reducers/widgets-reducer/widgets-reducer';

import './FormControls.css';

const FormControl = ({input, meta, tag, el, helpers, type, changeValue, resetInput, autoComplete, giveFocusStateOfInput, handleInputKeyPress, ...restProps}) => {
    const [passwordIsHidden, setPasswordIsHidden] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (el && el !== 'locationInput') {
            setHasError(meta.dirty && meta.error || meta.touched && meta.error);
        } else {
            setHasError(meta.dirty && meta.error);
        }
    }, null)

    useEffect(() => {
        giveFocusStateOfInput(meta.active);
    }, [meta.active])

    let inputRef = React.createRef();

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

let FormControlContainer = connect(null, {
    resetInput,
    giveFocusStateOfInput
})(FormControl);

export const EmailInput = (props) => {
    return <FormControlContainer tag='input' el='emailInput' helpers={{reset: true}} type='email' {...props} />
}

export const PasswordInput = (props) => {
    return <FormControlContainer tag='input' el='passwordInput' helpers={{reset: true, passwordHider: true}} type='password' {...props} />
}

export const LocationInput = (props) => {
    const handleInputKeyPress = (e) => {
        let listItemsArray = document.querySelectorAll('.region-modal__dropdown-list li');
        if (e.keyCode == 40) {
            listItemsArray[0].focus();
        }
        if (e.keyCode == 38) {
            listItemsArray[listItemsArray.length - 1].focus();
        }
    }

    return <FormControlContainer tag='input' el='locationInput' type='text' {...props} autoComplete='off' handleInputKeyPress={handleInputKeyPress} />
}

export const createField = (placeholder, fieldName, validators, component, customClass) => {
    return (
        <Field name={fieldName} placeholder={placeholder} validate={[...validators]} component={component} className={customClass} />
    )
}

export const FormError = ({error}) => {
    return (
        <div className={'formSummaryError'}>  
            {error}
        </div>
    )
}


