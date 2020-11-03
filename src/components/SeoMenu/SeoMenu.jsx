import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './SeoMenu.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

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
                    <Tab label="Женщинам" {...a11yProps(0)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    <Tab label="Мужчинам" {...a11yProps(1)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    <Tab label="Детям" {...a11yProps(2)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    <Tab label="Бренды" {...a11yProps(3)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    <Tab label="Премиум бренды" {...a11yProps(4)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    <Tab label="О компании" {...a11yProps(5)} disableTouchRipple={true}
                    disableFocusRipple={true} />
                    
                </Tabs>
            </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
        </div>
    );
}

const SeoMenu = (props) => {
    return (
        <div className="seoMenu">
            <nav className="seoMenu__container wrapper">
                <p className="seoMenu__title">Интернет-магазин одежды, обуви, аксессуаров, косметики и парфюмерии</p>
                <FullWidthTabs />
            </nav>
        </div>
    )
}

export default SeoMenu;