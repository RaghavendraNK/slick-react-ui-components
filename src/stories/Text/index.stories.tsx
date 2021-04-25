import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, Props } from '../../components/Text/index';

export default {
    argTypes: {},
    component: Text,
    title: 'Text',
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Caption = Template.bind({});
Caption.args = {
    text: 'Caption/Inter/Regular/12px',
    type: 'caption',
};

export const Overline = Template.bind({});
Overline.args = {
    text: 'OVERLINE/Inter/Regular/10px',
    type: 'overline',
};
