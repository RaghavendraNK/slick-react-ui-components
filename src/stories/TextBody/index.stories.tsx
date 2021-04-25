import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextBody, Props } from '../../components/TextBody/index';

export default {
    argTypes: {},
    component: TextBody,
    title: 'TextBody',
} as Meta;

const Template: Story<Props> = (args) => <TextBody {...args} />;

export const BodyOne = Template.bind({});
BodyOne.args = {
    size: 1,
    text: 'Body 1/Inter/Regular/16px',
};

export const BodyTwo = Template.bind({});
BodyTwo.args = {
    size: 2,
    text: 'Body 2/Inter/Regular/14px',
};
