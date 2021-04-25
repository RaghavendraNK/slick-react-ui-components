import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListItems, Props } from '../../components/ListItems/index';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default {
    argTypes: {},
    component: ListItems,
    title: 'ListItems',
} as Meta;

const Template: Story<Props> = (args) => <ListItems {...args} />;

export const SideBarItems = Template.bind({});
SideBarItems.args = {
    items: [
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
    ],
};

export const SelectedSideBarItems = Template.bind({});
SelectedSideBarItems.args = {
    selectedItem: 'Events1',
    items: [
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events1',
        },
    ],
};
