import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Props, TextField } from '../../components/TextField/index';

export default {
    argTypes: {},
    component: TextField,
    title: 'TextField',
} as Meta;

const Template: Story<Props> = (args) => <TextField {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
    helperText: 'Assistive text',
    label: 'Label',
    variant: 'outlined',
};

export const ActiveOutlined = Template.bind({});
ActiveOutlined.args = {
    helperText: 'Assistive text',
    label: 'Label',
    value: 'Input text',
    variant: 'outlined',
};

export const FocusOutlined = Template.bind({});
FocusOutlined.args = {
    focused: true,
    helperText: 'Assistive text',
    label: 'Label',
    value: 'Input text',
    variant: 'outlined',
};

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
    error: true,
    focused: true,
    helperText: 'Assistive text',
    label: 'Label',
    value: 'Input text',
    variant: 'outlined',
};

export const DisabledOutlinedWithoutValue = Template.bind({});
DisabledOutlinedWithoutValue.args = {
    disabled: true,
    helperText: 'Assistive text',
    label: 'Label',
    variant: 'outlined',
};

export const Select = Template.bind({});
Select.args = {
    label: 'Label',
    variant: 'outlined',
    helperText: 'Assistive text',
    options: [
        {
            label: 'Label',
            value: 'value',
        },
    ],
};
