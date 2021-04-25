import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BreadCrumbs, Props } from '../../components/BreadCrumbs';

export default {
    argTypes: {},
    component: BreadCrumbs,
    title: 'BreadCrumbs',
} as Meta;

const Template: Story<Props> = (args) => <BreadCrumbs {...args} />;

export const BreadCrumbsListOneItem = Template.bind({});
BreadCrumbsListOneItem.args = {
    paths: [
        {
            id: 'first',
            path: '/first',
            label: 'First',
        },
    ],
    handleClick: () => {},
};

export const BreadCrumbsListMoreThanOneItem = Template.bind({});
BreadCrumbsListMoreThanOneItem.args = {
    paths: [
        {
            id: 'first',
            path: '/first',
            label: 'First',
        },
        {
            id: 'second',
            path: '/second',
            label: 'Second',
        },
        {
            id: 'third',
            path: '/third',
            label: 'Third',
        },
    ],
    handleClick: () => {},
};
