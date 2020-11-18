import React from 'react'; 
import { Tooltip } from '@material-ui/core';

import './CustomTooltip.css';

const CustomTooltip = ({children, content, placement, arrow}) => {
    return (
        <React.Fragment>
            <Tooltip title={content} className="custom-tooltip" placement={placement} arrow={arrow} interactive>
                {children}
            </Tooltip>
        </React.Fragment>
    )
}

export default CustomTooltip;
