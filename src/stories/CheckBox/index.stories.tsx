import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CheckBox as CoreCheckBox, CheckBoxProps } from '../../components/CheckBox/index';

export default {
    argTypes: {},
    component: CoreCheckBox,
    title: 'CheckBox',
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CoreCheckBox {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
    checked: true,
    disabled: false,
    text: 'Click here',
};

export const Neutral = Template.bind({});
Neutral.args = {
    checked: true,
    disabled: false,
    indeterminate: true,
};
