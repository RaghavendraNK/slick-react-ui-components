import React from 'react';
import { CheckboxProps } from '@material-ui/core';
export interface Props extends CheckboxProps {
    indeterminate?: boolean;
    text?: string | JSX.Element;
}
export declare const CheckBox: React.FC<Props>;
export default CheckBox;
