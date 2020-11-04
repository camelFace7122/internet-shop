import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, idPrefix, labelPrefix, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${idPrefix + index}`}
            aria-labelledby={`${labelPrefix + index}`}
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

export default TabPanel;