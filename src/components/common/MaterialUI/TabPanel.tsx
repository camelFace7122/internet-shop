import React, { FC, PropsWithChildren } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

type PropsType = {
    value: number
    index: number
    idPrefix: string
    labelPrefix: string
}

const TabPanel: FC<PropsType> = ({ children, value, index, idPrefix, labelPrefix, ...other }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${idPrefix + index}`}
            aria-labelledby={`${labelPrefix + index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

export default TabPanel;