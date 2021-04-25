import React from 'react';
import { TextField as MDTextField, OutlinedTextFieldProps, MenuItem } from '@material-ui/core';
import NumberFormat from 'react-number-format';

export interface Option {
    label: string;
    value: string | number;
}
export interface Props extends OutlinedTextFieldProps {
    format?: string;
    options?: Array<Option>;
    value?: number | string | null;
}

export const TextField = (props: Props): JSX.Element => {
    const { options, format, variant, label, error, onChange, name, value, helperText } = props;
    return (
        <div id='RRUCTextField'>
            {!options && format && (
                <NumberFormat
                    name={name}
                    value={value}
                    error={error}
                    variant={variant}
                    label={label}
                    customInput={MDTextField}
                    format={format}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    helperText={helperText}
                />
            )}
            {!options && !format && <MDTextField {...props} />}
            {options && options.length > 0 && (
                <MDTextField
                    select
                    SelectProps={{
                        MenuProps: {
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                        },
                    }}
                    {...props}
                >
                    {options.map((option: Option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </MDTextField>
            )}
        </div>
    );
};

export default TextField;
