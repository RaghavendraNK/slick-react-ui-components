import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Radio as CoreRadio, Props } from '../../components/Radio/index';
export default {
    argTypes: {},
    component: CoreRadio,
    title: 'Radio',
} as Meta;

const Template: Story<Props> = (args) => <CoreRadio {...args} />;

export const Radio = Template.bind({});
Radio.args = {
    checked: false,
    disabled: false,
};
