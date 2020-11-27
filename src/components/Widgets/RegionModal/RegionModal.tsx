import React, { FC, KeyboardEvent, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { reduxForm, formValueSelector, change, InjectedFormProps } from 'redux-form';
import CommonModal from '../../common/CommomModal/CommonModal';
import {toggleRegionModal} from '../../../redux/reducers/widgets-reducer/widgets-reducer';
import {setUserGeoData} from '../../../redux/reducers/header-reducer/header-reducer';
import {createField, LocationInput} from '../../common/FormsControls/FormControls';
import {getOnClickSavedLocation, haveAnyMatch} from '../../../utils/validators/validators';
import cn from 'classnames';
import { getIsRegionModalOpen, getLocationsMatchesKz, getPopularLocationsKz, getIsInputFocused } from '../../../redux/reducers/widgets-reducer/widgets-selectors';

import './RegionModal.css';
import { CountryLocationsType, GeoDataType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';

type RegionModalPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    isRegionModalOpen: boolean
    locationsMatchesKz?: CountryLocationsType | null
    popularLocations: CountryLocationsType
    locationFieldValue: string
    isInputFocused: boolean
}

type MapDispatchToPropsType = {
    toggleRegionModal: (isOpen: boolean) => void
    setUserGeoData: (geoData: GeoDataType) => void
    changeValue: typeof change
}

type OwnPropsType = {}

type RegionFormPropsType = {
    locationsMatchesKz?: CountryLocationsType | null
    popularLocations: CountryLocationsType
    locationFieldValue: string
    isInputFocused: boolean
    changeValue: typeof change
    toggleRegionModal: (isOpen: boolean) => void
}

const RegionModal: FC<RegionModalPropsType> = ({isRegionModalOpen, toggleRegionModal, setUserGeoData,
                                                locationsMatchesKz, popularLocations, locationFieldValue,
                                                isInputFocused, changeValue}) => {
    const onRegionFormSubmit = (formData: GeoDataType) => {
        setUserGeoData(formData);
        toggleRegionModal(false);
    }
        
    return (
        <CommonModal isModalOpen={isRegionModalOpen} toggleModal={toggleRegionModal} mainClass={'region-modal'}>
            <div className={'region-modal__header'}>
                <span>Ваш регион доставки</span>
            </div>
            <div className="region-modal__body">
                <RegionReduxForm onSubmit={onRegionFormSubmit} locationsMatchesKz={locationsMatchesKz} 
                                 popularLocations={popularLocations} locationFieldValue={locationFieldValue} 
                                 isInputFocused={isInputFocused} changeValue={changeValue} toggleRegionModal={toggleRegionModal} />
            </div>
        </CommonModal>
    )
}

const RegionForm: FC<InjectedFormProps<GeoDataType, RegionFormPropsType> & RegionFormPropsType> = ({handleSubmit, popularLocations, 
                                                                                   locationFieldValue, isInputFocused, changeValue, 
                                                                                   toggleRegionModal, locationsMatchesKz}) => {
    const [locationNameWasSaved, setLocationNameWasSaved] = useState(false); 
    const [savedLocation, setSavedLocation] = useState<string | null>(null);

    useEffect(() => {
        if (isInputFocused) {
            setLocationNameWasSaved(false);
        }   
    }, [isInputFocused])

    const clickOnListItemHandler = (locationName: string) => () => {
        changeValue('region', 'location', locationName);
        setSavedLocation(locationName);
        getOnClickSavedLocation(locationName);
        setTimeout(() => {
            setLocationNameWasSaved(true)
        })
    }

    const handleDropdownKeyPress = (e: KeyboardEvent) => {
        let focusedItem = document.querySelector('.region-modal__dropdown-list li:focus') as HTMLElement;
        let listItemsArray = document.querySelectorAll('.region-modal__dropdown-list li') as NodeListOf<HTMLElement>;
        
        if (focusedItem) {
            if (e.key == 'ArrowDown') { 
                if (!focusedItem.nextElementSibling) {
                    listItemsArray[0].focus();
                } else {
                    (focusedItem.nextElementSibling as HTMLElement).focus();
                }
            }

            if (e.key == 'ArrowUp') {
                if (!focusedItem.previousElementSibling) {
                    listItemsArray[listItemsArray.length - 1].focus();
                } else {
                    (focusedItem.previousElementSibling as HTMLElement).focus();
                }
            }

            if (e.key == 'Enter') {
                focusedItem.click();
            }
        }
    }

    let dropdownList = null;
    let popularLocationsList = null;

    if (locationsMatchesKz) {
        dropdownList = locationsMatchesKz.map((item) => <li key={item.locationName} tabIndex={0} className='common-modal-text' onClick={clickOnListItemHandler(item.locationName)}>{item.locationName}</li>);
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
                        {(isInputFocused || !locationNameWasSaved || document.querySelector('.region-modal__dropdown-list li:focus')) && dropdownList}
                    </ul>
                </div>
            </div>
            <div><div className="common-modal-link common-modal-text region-modal__autodefiner">Определить автоматически</div></div>
            <div className="common-modal-text region-modal__pop-title">Популярные города</div>
            <div className="region-modal__pop-cities">
                {popularLocationsList}
            </div>
            <div className={'region-modal__buttons'}>
                <button aria-label='Отменить' role='button' className="region-modal__cancelBtn" onClick={() => toggleRegionModal(false)}>
                    Отменить
                </button>
                <button aria-label='Запомнить выбор' role='button' disabled={savedLocation !== locationFieldValue} className="region-modal__saveBtn" >
                    Запомнить выбор
                </button>
            </div>
        </form>
    )
}

const selector = formValueSelector('region');

const RegionReduxForm = reduxForm<GeoDataType, RegionFormPropsType>({form: 'region'})(RegionForm)

let mstpForModal = (state: AppStateType) => {
    return {
        isRegionModalOpen: getIsRegionModalOpen(state),
        locationsMatchesKz: getLocationsMatchesKz(state),
        popularLocations: getPopularLocationsKz(state),
        locationFieldValue: selector(state, 'location'),
        isInputFocused: getIsInputFocused(state),
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstpForModal, {
    toggleRegionModal,
    setUserGeoData,
    changeValue: change,
})(RegionModal);
