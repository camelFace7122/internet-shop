import React from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import { createField, FormError, InputControl } from '../FormsControls/FormControls';
import {toggleAuthModal, authorizeByEmail} from './../../../redux/reducers/header-reducer/header-reducer';
import {required} from './../../../utils/validators/validators';

import './AuthModal.css';

const AuthModal = ({isAuthModalOpen, toggleAuthModal, authorizeByEmail}) => {
    const handleClick = (e) => {
        if (!e.target.closest('.auth-modal__content')) {
            toggleAuthModal(false);
        }
    }

    const onSubmit = (formData) => {
        authorizeByEmail(formData);
    }

    if (isAuthModalOpen) {
        return (    
        <div className="auth-modal" onClick={handleClick}>
            <div className="auth-modal__content">
                <h1>Авторизация</h1>
                <AuthReduxForm onSubmit={ onSubmit } />
            </div>
        </div>
        )
    } 
    return null;
};

const AuthForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], InputControl)}
            {createField('Password', 'password', [required], InputControl, 'password')}
            {error && <FormError error={error} />}
            <div>
                <button>Войти</button>
            </div>
        </form>
}

const AuthReduxForm = reduxForm({form: 'auth',})(AuthForm)

let mstp = (state) => ({
    isAuthModalOpen: state.header.isAuthModalOpen,
})

export default connect(mstp, {
    toggleAuthModal,
    authorizeByEmail,
})(AuthModal);