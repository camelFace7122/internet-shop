import React, { useState } from 'react';
import cn from 'classnames';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';
import TabPanel from '../../common/MaterialUI/TabPanel';
import { Tabs, Tab } from '@material-ui/core';

const MenuDropdownColumns = ({sectionColumns, banner}) => {
    return (
        <div className={'menuDropdown__cols'}>
            {sectionColumns}
            {
                banner && 
                <div className={'menuDropdown__banner'}>
                    <a href="#" className={'menuDropdown__banner-body'}>
                        {   
                            (banner.title && banner.subtitle) ?
                            <>
                                <div className={'menuDropdown__banner-image'} style={{backgroundImage: `url(${banner.picture})`}}>
                                    <TeaserOverlay />
                                </div>
                                <div className={'menuDropdown__banner-title'}>
                                    <span>{banner.title}</span>
                                </div>
                                <div className={'menuDropdown__banner-subtitle'}>
                                    <span>{banner.subtitle}</span>
                                </div>
                            </> :
                            <div className={cn('menuDropdown__banner-image', 'fullHeight-image')} style={{backgroundImage: `url(${banner.picture})`}}>
                                <TeaserOverlay text={'Смотреть'} />
                            </div>
                        }
                    </a>
                </div>
            }
        </div>
    )
}

const MenuDropdown = ({tabs, showDropdownList, itemIsHovered}) => {
    const [value, setValue] = useState(0);

    const onHover = (e) => {
        if (itemIsHovered) {
            showDropdownList(true, tabs);
        }
    }

    const onLeave = (e) => {
        showDropdownList(false, null);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let tabPanels = null;

    if (tabs && !tabs[0].empty) {
        tabPanels = tabs.map((tab, index) => {
            let sectionColumns = tab.sections.map(section => {
                let currentIndex = 0;
                return section.config.map((itemsCount, index) => {
                    
                    let linkItems = section.links.filter( (link, index) => {
                        return index >= currentIndex && index < currentIndex + itemsCount
                    })
                    currentIndex += itemsCount;

                    linkItems = linkItems.map((link) => <a href="#" role="button" className={'menuDropdown__section-item'}>{link}</a>) 
                    
                    
                    return <div className={'menuDropdown__section-column'}>
                        {
                            index == 0 && section.heading && <div className={'menuDropdown__section-heading'} role="heading"><b>{section.heading}</b></div> ||
                            section.heading && <div className={'menuDropdown__section-heading-continuation'}></div> 
                        }
                        {
                            linkItems
                        }
                    </div>
                });
            }); 

            if (tabs.length > 1) {
                return <TabPanel value={value} index={index} idPrefix={`simple-tabpanel-`} labelPrefix={`simple-tab-`}>
                    <MenuDropdownColumns sectionColumns={sectionColumns} banner={tab.banner}/>
                </TabPanel>
            } else {
                return <MenuDropdownColumns sectionColumns={sectionColumns} banner={tab.banner}/>
            }
        })
    }

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    if (tabs && tabs[0].empty) {
        return null;
    } else return (
        <div className={'menuDropdown'} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <div className={cn('menuDropdown__inner', 'wrapper')}>
                {
                    (tabs && tabs.length > 1) && 
                        <Tabs value={value} onChange={handleChange}>
                            {tabs.map( (tab, index) => {
                                return <Tab label={tab.tabLabel} disableTouchRipple={true}
                                disableFocusRipple={true} {...a11yProps(index)} />
                            })}
                        </Tabs>
                }
                {tabPanels ? tabPanels : <div className={cn('menuDropdown__placeholderBlock')}></div>}
            </div>
        </div>
    )
}

export default MenuDropdown;
