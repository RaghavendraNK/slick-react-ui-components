import React from 'react';
import { Switch as MDSwitch, SwitchProps } from '@material-ui/core';

export interface Props extends SwitchProps {}

export const Switch: React.FC<Props> = (props: Props) => {
    return (
        <div id='RRUCSwitch'>
            <MDSwitch {...props} />
        </div>
    );
};

export default Switch;
