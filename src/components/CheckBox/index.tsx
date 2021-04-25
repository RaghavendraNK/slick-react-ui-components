import React from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';

export interface CheckBoxProps extends CheckboxProps {
    indeterminate?: boolean;
    text?: string | JSX.Element;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
    checked = false,
    text,
    ...props
}: CheckBoxProps) => {
    return (
        <div id='RRUCCheckBox'>
            <Checkbox checked={checked} {...props} />
            {text && <div>{text}</div>}
        </div>
    );
};

export default CheckBox;
