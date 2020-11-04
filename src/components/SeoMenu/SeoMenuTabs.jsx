import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SeoContentTabsContainer from './SeoContentTabsContainer';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
        display: 'inline-block',
    },
}));

function SeoMenuTabs({seoMenuData}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let tabs = seoMenuData.map((tab, i) => {
        return <Tab label={tab.tabName} {...a11yProps(i)} disableTouchRipple={true}
            disableFocusRipple={true} />
    })
    let tabPanels = seoMenuData.map((tab, i) => {
        return (
            <SeoContentTabsContainer value={value} index={i} tab={tab}/>
        )
    })

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {tabs}
                </Tabs>
            </AppBar>
            <div className="seoTabContent__container">
                {tabPanels}
            </div>
        </div>
    );
}

export default SeoMenuTabs;
