import React, { FC } from 'react';
import { SeoTabType } from '../../types/types';
import TabPanel from '../common/MaterialUI/TabPanel';
import SeoContentTabs from './SeoContentTabs';

type PropsType = {
    value: number
    index: number
    tab: SeoTabType
}

const SeoContentTabsContainer: FC<PropsType> = ({value, index, tab}) => {
    let [subTabValue, setSubTabValue] = React.useState(0);

    return (
        <TabPanel value={value} index={index} idPrefix={'full-width-tabpanel-'} labelPrefix={'full-width-tab-'}>
            <SeoContentTabs {...tab} value={subTabValue} setValue={setSubTabValue} />
        </TabPanel>
    )
}

export default SeoContentTabsContainer;