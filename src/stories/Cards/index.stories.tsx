import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, Props } from '../../components/Cards/index';
import ApartmentIcon from '@material-ui/icons/Apartment';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';

export default {
    argTypes: {},
    component: Card,
    title: 'Card',
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;
export const CardMenu = Template.bind({});
CardMenu.args = {
    type: 'cardmenu',
    cardDetails: {
        icon: <ApartmentIcon />,
        title: 'Institution Profiles',
        description: 'Add, view and manage your institutional profiles',
    },
};

export const CardStatistics = Template.bind({});
CardStatistics.args = {
    type: 'statistics',
    cardDetails: {
        count: 24,
        header: 'Total staff',
        description: 'Add, manage, view reports and insights',
        actions: [
            {
                key: 'addNewStaff',
                label: 'Add a new staff',
                icon: <AddCircleIcon />,
                type: 'add',
                path: '/addnewstaff',
            },
            {
                key: 'manageStaffs',
                label: 'Manage staffs',
                icon: <CreateIcon />,
                type: 'edit',
                path: '/manageStaffs',
            },
        ],
    },
};

export const CardStatisticsZero = Template.bind({});
CardStatisticsZero.args = {
    type: 'statistics',
    cardDetails: {
        count: 0,
        header: 'Total staff',
        description: 'Add, manage, view reports and insights',
        actions: [
            {
                key: 'addNewStaff',
                label: 'Add a new staff',
                icon: <AddCircleIcon />,
                type: 'add',
                path: '/addnewstaff',
            },
        ],
    },
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {
    type: 'simple',
    content: <div>Card Content</div>,
};
