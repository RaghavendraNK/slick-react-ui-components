import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Switch as CoreSwitch, Props } from '../../components/Switch/index';

export default {
    argTypes: {},
    component: CoreSwitch,
    title: 'Switch',
} as Meta;

const Template: Story<Props> = (args) => <CoreSwitch {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    checked: false,
    disabled: false,
};
