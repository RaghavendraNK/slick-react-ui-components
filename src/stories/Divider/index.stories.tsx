import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Divider, Props } from '../../components/Divider';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
export default {
    argTypes: {},
    component: Divider,
    title: 'Divider',
} as Meta;

const Template: Story<Props> = (args) => <Divider {...args} />;

export const DividerWithText = Template.bind({});
DividerWithText.args = {
    seperator: 'or',
};

export const DividerWithLongText = Template.bind({});
DividerWithLongText.args = {
    seperator:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
};

export const DividerWithOnelineText = Template.bind({});
DividerWithOnelineText.args = {
    seperator:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const DividerBlank = Template.bind({});
DividerBlank.args = {};

export const DividerWithIcon = Template.bind({});
DividerWithIcon.args = {
    seperator: <ReportProblemIcon />,
};
