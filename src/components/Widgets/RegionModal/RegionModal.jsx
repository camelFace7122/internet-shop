import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { reduxForm, formValueSelector, change } from 'redux-form';
import CommonModal from './../../common/CommomModal/CommonModal';
import {toggleRegionModal} from './../../../redux/reducers/widgets-reducer/widgets-reducer';
import {setUserGeoData} from './../../../redux/reducers/header-reducer/header-reducer';
import {createField, LocationInput} from './../../common/FormsControls/FormControls';
import {getOnClickSavedLocation, haveAnyMatch} from './../../../utils/validators/validators';
import cn from 'classnames';
import { getIsRegionModalOpen, getLocationsMatchesKz, getPopularLocationsKz, getIsInputFocused } from '../../../redux/reducers/widgets-reducer/widgets-selectors';

import './RegionModal.css';

const RegionModal = ({isRegionModalOpen, toggleRegionModal, setUserGeoData}) => {
    const onRegionFormSubmit = (formData) => {
        setUserGeoData(formData);
        toggleRegionModal(false);
    }
        
    return (
        <CommonModal isModalOpen={isRegionModalOpen} toggleModal={toggleRegionModal} mainClass={'region-modal'}>
            <div className={'region-modal__header'}>
                <span>Ваш регион доставки</span>
            </div>
            <div className="region-modal__body">
                <RegionReduxForm onSubmit={onRegionFormSubmit} />
            </div>
        </CommonModal>
    )
}

const RegionForm = ({handleSubmit, popularLocations, locationFieldValue, isInputFocused, changeValue, toggleRegionModal, locationsMatchesKz}) => {
    const [locationNameWasSaved, setLocationNameWasSaved] = useState(false); 
    const [savedLocation, setSavedLocation] = useState(null);

    useEffect(() => {
        if (isInputFocused) {
            setLocationNameWasSaved(false);
        }   
    }, [isInputFocused])

    const clickOnListItemHandler = (locationName) => () => {
        changeValue('region', 'location', locationName);
        setSavedLocation(locationName);
        getOnClickSavedLocation(locationName);
        setLocationNameWasSaved(true);
    }

    const handleDropdownKeyPress = (e) => {
        let focusedItem = document.querySelector('.region-modal__dropdown-list li:focus');
        let listItemsArray = document.querySelectorAll('.region-modal__dropdown-list li');

        if (e.keyCode == 40) { 
            if (!focusedItem.nextElementSibling) {
                listItemsArray[0].focus();
            } else {
                focusedItem.nextElementSibling.focus();
			}
        }

        if (e.keyCode == 38) {
          	if (!focusedItem.previousElementSibling) {
				listItemsArray[listItemsArray.length - 1].focus();
          	} else {
                focusedItem.previousElementSibling.focus();
            }
        }

        if (e.keyCode == 13 || e.keyCode == 9) {
            focusedItem.click();
        }
    }

    let dropdownList = null;
    let popularLocationsList = null;

    if (locationsMatchesKz) {
        dropdownList = locationsMatchesKz.map((item) => <li key={item.locationName} tabIndex={'0'} className='common-modal-text' onClick={clickOnListItemHandler(item.locationName)}>{item.locationName}</li>);
    }

    if (popularLocations) {
        popularLocationsList = popularLocations.map((item) => {
            return <div><a role={'button'} className={'common-modal-text region-modal__pop-city'} onClick={clickOnListItemHandler(item.locationName)}>{item.locationName}</a></div>
        })
    }   

    return (
        <form onSubmit={handleSubmit} className='region-modal__form'>
            <div className='region-modal__geoselect'>
                {createField('Введите название населенного пункта', 'location', [haveAnyMatch], LocationInput, 'region-modal__input')}
                <div className={cn('region-modal__dropdown', {['hide-dropdown']: !isInputFocused && locationNameWasSaved})}>
                    <ul className='region-modal__dropdown-list' onKeyDown={handleDropdownKeyPress}>
                        {(isInputFocused || document.querySelector('.region-modal__dropdown-list li:focus')) && dropdownList}
                    </ul>
                </div>
            </div>
            <div><div className="common-modal-link common-modal-text region-modal__autodefiner">Определить автоматически</div></div>
            <div className="common-modal-text region-modal__pop-title">Популярные города</div>
            <div className="region-modal__pop-cities">
                {popularLocationsList}
            </div>
            <div className={'region-modal__buttons'}>
                <button aria-label role='button' className="region-modal__cancelBtn" onClick={() => toggleRegionModal(false)}>
                    Отменить
                </button>
                <button aria-label role='button' disabled={savedLocation !== locationFieldValue} className="region-modal__saveBtn" >
                    Запомнить выбор
                </button>
            </div>
        </form>
    )
}

const selector = formValueSelector('region');

let mstpForForm = (state) => {
    return {
        locationsMatchesKz: getLocationsMatchesKz(state),
        popularLocations: getPopularLocationsKz(state),
        locationFieldValue: selector(state, 'location'),
        isInputFocused: getIsInputFocused(state),
    }
}

const RegionReduxForm = compose(connect(mstpForForm, {
    changeValue: change,
    toggleRegionModal,
}), reduxForm({form: 'region'}))(RegionForm)


let mstpForModal = (state) => {
    return {
        isRegionModalOpen: getIsRegionModalOpen(state),
    }
}

export default connect(mstpForModal, {
    toggleRegionModal,
    setUserGeoData,
})(RegionModal);
