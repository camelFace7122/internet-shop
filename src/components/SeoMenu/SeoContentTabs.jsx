import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './../common/MaterialUI/TabPanel'
import SeoContent from './SeoContent';


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
    },
    tabs: {
        borderRight: '1px solid #e5e5e5',
    },
}));

function SeoContentTabs({categories, content, value, setValue}) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let tabs = null;
    let tabPanels = null;
    let tabContent = null;

    if (categories) {
        tabs = categories.map((item, i) => {
            return <Tab label={item.categoryName} {...a11yProps(i)} disableTouchRipple={true}
                disableFocusRipple={true} />
        })

        tabPanels = categories.map((item, i) => {
            return (
                <TabPanel value={value} index={i} idPrefix={'vertical-tabpanel-'} labelPrefix={'vertical-tab-'}>
                    <SeoContent links={item.links} config={item.config} />
                </TabPanel>
            )
        })
    }

    if (content) {
        return (
            <SeoContent links={content.links} config={content.config} benefits={content.benefits} />
        )
    }

    return (
        <div className={classes.root}>
            {tabs && <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    {tabs}
                </Tabs>}
            {tabPanels}
        </div>
    );
}

export default SeoContentTabs;