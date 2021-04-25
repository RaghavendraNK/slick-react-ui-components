import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Story, Meta } from '@storybook/react';

import { Button, Props } from '../../components/Button/index';
import '../../assets/styles/index.scss';
import googleIcon from '../../assets/icons/google-icon.svg';

export default {
    component: Button,
    title: 'Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

/**
 * * Filled
 */
export const FilledButtonWithDense32 = Template.bind({});
FilledButtonWithDense32.args = {
    dense: 32,
    label: 'Button',
    variant: 'filled',
};

export const FilledButtonWithDense40 = Template.bind({});
FilledButtonWithDense40.args = {
    dense: 40,
    label: 'Button',
    variant: 'filled',
};

export const FilledButtonWithDense48 = Template.bind({});
FilledButtonWithDense48.args = {
    dense: 48,
    label: 'Button',
    variant: 'filled',
};

export const FilledButtonWithIcon = Template.bind({});
FilledButtonWithIcon.args = {
    dense: 32,
    label: 'Button',
    variant: 'filled',
    startIcon: <AddCircleIcon />,
};

/**
 * * Outlined
 */

export const OutlinedButtonWithDense32 = Template.bind({});
OutlinedButtonWithDense32.args = {
    dense: 32,
    label: 'Button',
    variant: 'outlined',
};

export const OutlinedButtonWithDense40 = Template.bind({});
OutlinedButtonWithDense40.args = {
    dense: 40,
    label: 'Button',
    variant: 'outlined',
};

export const OutlinedButtonWithDense48 = Template.bind({});
OutlinedButtonWithDense48.args = {
    dense: 48,
    label: 'Button',
    variant: 'outlined',
};

export const OutlinedButtonWithIcon = Template.bind({});
OutlinedButtonWithIcon.args = {
    dense: 32,
    label: 'Button',
    variant: 'outlined',
    startIcon: <AddCircleIcon />,
};

/**
 * * Text
 */

export const TextButtonWithDense32 = Template.bind({});
TextButtonWithDense32.args = {
    dense: 32,
    label: 'Button',
    variant: 'text',
};

export const TextButtonWithDense40 = Template.bind({});
TextButtonWithDense40.args = {
    dense: 40,
    label: 'Button',
    variant: 'text',
};

export const TextButtonWithDense48 = Template.bind({});
TextButtonWithDense48.args = {
    dense: 48,
    label: 'Button',
    variant: 'text',
};

export const TextButtonWithIcon = Template.bind({});
TextButtonWithIcon.args = {
    dense: 32,
    label: 'Button',
    variant: 'text',
    startIcon: <AddCircleIcon />,
};

/**
 * * Link
 */

export const LinkButton = Template.bind({});
LinkButton.args = {
    label: 'Button',
    variant: 'link',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    dense: 40,
    label: 'Button',
    variant: 'icon',
    startIcon: <img width='16' height='16' src={googleIcon} />,
};
