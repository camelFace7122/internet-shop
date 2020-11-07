import React from 'react';
import {Field} from 'redux-form';
import classes from './FormControls.module.css';
import cn from 'classnames';

const FormControl = ({input, meta, el, ...restProps}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cn(classes.form__control, {[classes.hasError]: hasError})}>
            {React.createElement(el, {...input, ...restProps})}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const InputControl = (props) => {
    return <FormControl el='input' {...props} />
}

export const createField = (placeholder, fieldName, validators, component, type) => {
    return (
        <Field name={fieldName} placeholder={placeholder} validate={[...validators]} component={component} type={type} />
    )
}

export const FormError = ({error}) => {
    return (
        <div className={classes.formSummaryError}>  
            {error}
        </div>
    )
}


