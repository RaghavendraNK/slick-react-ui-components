import React from 'react';
import { CheckboxProps } from '@material-ui/core';
/**
 * * indeterminate: boolean to show check box as un selectable (neutral)
 * * text: string to be shown next to the checkbox
 */
export interface Props extends CheckboxProps {
    indeterminate?: boolean;
    text?: string | JSX.Element;
}
export declare const CheckBox: React.FC<Props>;
export default CheckBox;
