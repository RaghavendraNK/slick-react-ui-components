import React from 'react';
import { Button as MDButton } from '@material-ui/core';
import classNames from 'classnames';

export interface Props {
    dense?: 32 | 40 | 48;
    disabled?: boolean;
    id: string;
    label: string;
    onClick?: () => void;
    startIcon?: JSX.Element;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant: 'filled' | 'outlined' | 'text' | 'icon' | 'link';
}

export const Button = ({
    variant = 'filled',
    label,
    startIcon,
    dense = 32,
    onClick,
    ...props
}: Props): JSX.Element => {
    const btnClass = classNames('btn', {
        'btn-filled': variant === 'filled',
        'btn-outlined': variant === 'outlined',
        'btn-text': variant === 'text',
        'btn-icon': variant === 'icon',
        'action-button': variant === 'text' && startIcon,
    });
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    /**
     * * if variant link then return custom span else return button with different variants as specified in material-ui
     */
    return (
        <div id='RRUCButton'>
            {variant !== 'link' && (
                <MDButton
                    className={`${btnClass} height-${dense}`}
                    startIcon={startIcon}
                    onClick={onClick}
                    {...props}
                >
                    {label}
                </MDButton>
            )}
            {variant === 'link' && (
                <span className='btn-link' onClick={() => handleClick()}>
                    {label}
                </span>
            )}
        </div>
    );
};

export default Button;
