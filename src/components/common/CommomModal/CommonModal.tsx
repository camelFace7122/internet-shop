import React, { FC, PropsWithChildren } from 'react';
import ModalCloseBtn from './ModalCloseBtn';
import cn from 'classnames';

import './CommonModal.css';

type PropsType = {
    isModalOpen: boolean
    toggleModal: (isOpen: boolean) => void
    mainClass?: string
}

const CommonModal: FC<PropsType> = ({isModalOpen, toggleModal, mainClass, children}) => {
    const handleClick = (e: any) => {
        if (!e.target.closest('.common-modal-content') || e.target.closest('.modalCloseBtn')) {
            toggleModal(false);
        }
    }

    if (isModalOpen) {
        return (    
        <div className={cn('common-modal', {mainClass: mainClass})} onClick={handleClick} >
            <div className={cn('common-modal-content', {[mainClass + '__content']: mainClass})} >
                <ModalCloseBtn />
                {children}
            </div>
        </div>
        )
    } 
    return null;
};

export default CommonModal;