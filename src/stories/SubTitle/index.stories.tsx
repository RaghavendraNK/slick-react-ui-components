import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubTitle, Props } from '../../components/SubTitle/index';

export default {
    argTypes: {},
    component: SubTitle,
    title: 'SubTitle',
} as Meta;

const Template: Story<Props> = (args) => <SubTitle {...args} />;

export const SubTitleOne = Template.bind({});
SubTitleOne.args = {
    size: 1,
    text: 'Subtitle 1/Inter/Regular/16px',
};

export const SubTitleTwo = Template.bind({});
SubTitleTwo.args = {
    size: 2,
    text: 'Subtitle 2/Inter/Medium/14px',
};
