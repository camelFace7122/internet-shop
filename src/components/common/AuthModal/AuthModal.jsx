import React from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import { createField, FormError, InputControl } from '../FormsControls/FormControls';
import {toggleAuthModal, authorizeByEmail} from './../../../redux/reducers/header-reducer/header-reducer';
import {requiredEmail, requiredPassword} from './../../../utils/validators/validators';
import ModalCloseBtn from './ModalCloseBtn';

import './AuthModal.css';


const AuthModal = ({isAuthModalOpen, toggleAuthModal, authorizeByEmail}) => {
    const handleClick = (e) => {
        if (!e.target.closest('.auth-modal__content') || e.target.closest('.modalCloseBtn')) {
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
                <ModalCloseBtn />
                <div className="auth-modal__header">
                    <span className="auth-modal__header-title">вход</span>
                </div>
                <div className="auth-modal__body">
                    <div className="auth-modal__bySocials">
                        <p className="auth-modal-text">
                            <span><b>Через соцсети</b> (рекомендуем для новых покупаетелей)</span>
                        </p>
                        <div className="auth-modal__bySocials-links">
                            <a href="/" className="auth-modal__bySocials-btn auth-modal__vk-btn" >Вконтакте</a>
                            <a href="/" className="auth-modal__bySocials-btn auth-modal__fb-btn">Facebook</a>
                            <a href="/" className="auth-modal__bySocials-btn auth-modal__google-btn">Google</a>
                            <a href="/" className="auth-modal__bySocials-btn auth-modal__mailru-btn">Почта Mail.ru</a>
                        </div>
                    </div>
                    <AuthReduxForm onSubmit={ onSubmit } />
                </div>
            </div>
        </div>
        )
    } 
    return null;
};

const AuthForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
             <p className="auth-modal-text">
                <b>С помощью аккаунта Lamoda</b> <a href="/" className="auth-modal-link">Создать аккаунт</a>
            </p>
            {createField('Email', 'email', [requiredEmail], InputControl)}
            {createField('Password', 'password', [requiredPassword], InputControl, 'password')}
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