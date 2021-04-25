import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { GridContainer, Props } from '../../components/GridContainer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';
import Card from '../../components/Cards';

export default {
    argTypes: {},
    component: GridContainer,
    title: 'GridContainer',
} as Meta;

const Template: Story<Props> = (args) => <GridContainer {...args} />;

export const Grid = Template.bind({});
const items = [
    <Card
        type='statistics'
        cardDetails={{
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
        }}
    />,
    <Card
        type='statistics'
        cardDetails={{
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
        }}
    />,
    <Card
        type='statistics'
        cardDetails={{
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
        }}
    />,
    <Card
        type='statistics'
        cardDetails={{
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
        }}
    />,
    <Card
        type='statistics'
        cardDetails={{
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
        }}
    />,
];
Grid.args = {
    spacing: 4,
    items,
    name: 'uniqueName',
    sizes: { xs: 12, sm: 12, md: 3, lg: 3 },
    containerCss: '',
    itemCss: '',
};
