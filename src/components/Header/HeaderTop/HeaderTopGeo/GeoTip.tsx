import React, { FC, MouseEvent } from 'react';

type PropsType = {
    region: string
    confirmUserRegion: () => void
    toggleRegionModal: (isOpen: boolean) => void
}

const GeoTip: FC<PropsType> = ({region, confirmUserRegion, toggleRegionModal}) => {
    const onOkBtnClick = (e: MouseEvent) => {
        confirmUserRegion();
    }

    const onNotOkBtnClick = (e: MouseEvent) => {
        toggleRegionModal(true);
    }

    return (
        <div className={'geoTip custom-tooltip-text'}>
            <span className={'geoTip__description'}>
                Информация о доставке будет отображаться для региона:
            </span>
            <div className={'geoTip__locationName'}>{region}</div>
            <div className={'geoTip__buttons-wrapper'}>
                <button type="button" aria-label="Да, все верно" role="button" className="custom-tooltip-btn blue-tip-btn" onClick={onOkBtnClick}>
                    Да, всё верно
                </button>
                <button type="button" aria-label="Выбрать другой" role="button" className="custom-tooltip-btn white-tip-btn" onClick={onNotOkBtnClick}>
                    Выбрать другой
                </button>
            </div>
        </div>
    )
}

export default GeoTip;