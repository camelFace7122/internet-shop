import React, { FC } from 'react';
import {connect} from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, EmailInput, FormError, PasswordInput } from '../../common/FormsControls/FormControls';
import {toggleAuthModal} from '../../../redux/reducers/widgets-reducer/widgets-reducer';
import {isEmail, minLength6, requiredEmail, requiredPassword} from '../../../utils/validators/validators';
import CommonModal from '../../common/CommomModal/CommonModal';

import './AuthModal.css';
import { AppStateType } from '../../../redux/store';

type AuthModalPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    isAuthModalOpen: boolean
}

type MapDispatchToPropsType = {
    toggleAuthModal: (isOpen: boolean) => void
}

type OwnPropsType = {}

type AuthFormPropsType = InjectedFormProps

const AuthModal: FC<AuthModalPropsType> = ({isAuthModalOpen, toggleAuthModal}) => {

    return <CommonModal isModalOpen={isAuthModalOpen} toggleModal={toggleAuthModal} mainClass={'auth-modal'}>
        <div className="auth-modal__header">
            <span className="auth-modal__header-title">вход</span>
        </div>
        <div className="auth-modal__body">
            <div className="auth-modal__bySocials">
                <p className="common-modal-text">
                    <span><b>Через соцсети</b> (рекомендуем для новых покупаетелей)</span>
                </p>
                <div className="auth-modal__bySocials-links">
                    <a href="/" className="auth-modal__bySocials-btn auth-modal__vk-btn" >Вконтакте</a>
                    <a href="/" className="auth-modal__bySocials-btn auth-modal__fb-btn">Facebook</a>
                    <a href="/" className="auth-modal__bySocials-btn auth-modal__google-btn">Google</a>
                    <a href="/" className="auth-modal__bySocials-btn auth-modal__mailru-btn">Почта Mail.ru</a>
                </div>
            </div>
            <AuthReduxForm />
        </div>
    </CommonModal>

};

const AuthForm: FC<AuthFormPropsType> = ({handleSubmit, error, valid}) => {

    return <form onSubmit={handleSubmit}>
             <p className="common-modal-text">
                <b>С помощью аккаунта Lamoda</b> <a href="/" className="common-modal-link">Создать аккаунт</a>
            </p>
            <div className="auth-modal__form-field">
                {createField('Введите свой email', 'email', [requiredEmail, isEmail], EmailInput, 'auth-modal__input')}
            </div>
            <div className="auth-modal__form-field">
                {createField('Введите пароль', 'password', [requiredPassword, minLength6], PasswordInput, 'auth-modal__input')}
            </div>
            {error && <FormError error={error} />}
            <div className="auth-modal__form-submit">
                <button className="auth-modal-submit" disabled={!valid} onClick={() => console.log('ggg')}>Войти</button>
                <a href="/" role="button" className="common-modal-text common-modal-link">Забыли пароль?</a>
            </div>
        </form>
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)

let mstp = (state: AppStateType) => ({
    isAuthModalOpen: state.widgets.isAuthModalOpen,
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {
    toggleAuthModal,
})(AuthModal);