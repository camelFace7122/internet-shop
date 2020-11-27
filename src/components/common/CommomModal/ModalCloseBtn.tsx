import React, { FC } from 'react';

import './CommonModal.css';

type PropsType = {}

const ModalCloseBtn: FC<PropsType> = (props) => {
    return (
        <div className="modalCloseBtn">
            <div className="modalCloseBtn__icon"></div>
        </div>
    )
}

export default ModalCloseBtn;