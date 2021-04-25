import React from 'react';
import { Logo, Props } from '../../components/Logo/index';
import { Story, Meta } from '@storybook/react';

export default {
    argTypes: {},
    component: Logo,
    title: 'Logo',
} as Meta;

const Template: Story<Props> = (args) => <Logo {...args} />;
export const Brand = Template.bind({});
Brand.args = {};
