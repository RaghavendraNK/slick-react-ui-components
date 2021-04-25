import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Heading, Props } from '../../components/Heading/index';

export default {
    argTypes: {},
    component: Heading,
    title: 'Heading',
} as Meta;

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
    size: 1,
    text: 'H1/Inter/Light/96px',
};

export const Heading2 = Template.bind({});
Heading2.args = {
    size: 2,
    text: 'H2/Inter/Light/60px',
};

export const Heading3 = Template.bind({});
Heading3.args = {
    size: 3,
    text: 'H3/Inter/Regular/48px',
};
export const Heading4 = Template.bind({});
Heading4.args = {
    size: 4,
    text: 'H4/Inter/Regular/34px',
};
export const Heading5 = Template.bind({});
Heading5.args = {
    size: 5,
    text: 'H5/Inter/Regular/24px',
};
export const Heading6 = Template.bind({});
Heading6.args = {
    size: 6,
    text: 'H6/Inter/Medium/20px',
};
