import React, { FC, PropsWithChildren } from 'react'; 
import { Tooltip, TooltipProps } from '@material-ui/core';

import './CustomTooltip.css';

type PropsType = PropsWithChildren<{
    content: NonNullable<React.ReactNode>
    placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
    arrow?: boolean
}>

const CustomTooltip: FC<PropsType> = ({children, content, placement, arrow}) => {
    return (
        <React.Fragment>
            <Tooltip title={content} className="custom-tooltip" placement={placement} arrow={arrow} interactive>
                {children as React.ReactElement}
            </Tooltip>
        </React.Fragment>
    )
}

export default CustomTooltip;
