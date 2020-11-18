import React from 'react';

const GeoTip = ({region, confirmUserRegion, toggleRegionModal}) => {
    const onOkBtnClick = (e) => {
        confirmUserRegion();
    }

    const onNotOkBtnClick = (e) => {
        toggleRegionModal(true);
    }

    return (
        <div className={'geoTip custom-tooltip-text'}>
            <span className={'geoTip__description'}>
                Информация о доставке будет отображаться для региона:
            </span>
            <div className={'geoTip__locationName'}>{region}</div>
            <div className={'geoTip__buttons-wrapper'}>
                <button type="button" aria-label role="button" className="custom-tooltip-btn blue-tip-btn" onClick={onOkBtnClick}>
                    Да, всё верно
                </button>
                <button type="button" aria-label role="button" className="custom-tooltip-btn white-tip-btn" onClick={onNotOkBtnClick}>
                    Выбрать другой
                </button>
            </div>
        </div>
    )
}

export default GeoTip;