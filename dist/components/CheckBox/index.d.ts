import React from 'react';
import { CheckboxProps } from '@material-ui/core';
export interface CheckBoxProps extends CheckboxProps {
    indeterminate?: boolean;
    text?: string | JSX.Element;
}
export declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
