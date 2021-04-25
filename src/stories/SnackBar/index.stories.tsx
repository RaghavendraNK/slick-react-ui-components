import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SnackBar, Props } from '../../components/SnackBar';

export default {
    argTypes: {},
    component: SnackBar,
    title: 'SnackBar',
} as Meta;

const Template: Story<Props> = (args) => <SnackBar {...args} />;
export const SnackBarMobileMin = Template.bind({});
SnackBarMobileMin.args = {
    horizontal: 'center',
    messasge: 'Hello world!',
    open: true,
    vertical: 'top',
};

export const SnackBarMobileMax = Template.bind({});
SnackBarMobileMax.args = {
    horizontal: 'center',
    messasge: 'Amet minim mollit non deserunt ullamco est sit aliqua dolo',
    open: true,
    vertical: 'top',
};

export const SnackBarDesktopMin = Template.bind({});
SnackBarDesktopMin.args = {
    horizontal: 'center',
    messasge: 'New staff addedd successfully! ',
    open: true,
    vertical: 'top',
};

export const SnackBarDesktopMax = Template.bind({});
SnackBarDesktopMax.args = {
    horizontal: 'center',
    messasge: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ',
    open: true,
    vertical: 'top',
};

export const SnackBarLongText = Template.bind({});
SnackBarLongText.args = {
    horizontal: 'center',
    messasge:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    open: true,
    vertical: 'top',
};
