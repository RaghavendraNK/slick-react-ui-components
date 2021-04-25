import React from 'react';
import { Radio as MDRadio, RadioProps } from '@material-ui/core';

export interface Props extends RadioProps {}

export const Radio: React.FC<Props> = ({ ...props }) => {
    return (
        <div id='RRUCRadio'>
            <MDRadio {...props} />
        </div>
    );
};

export default Radio;
