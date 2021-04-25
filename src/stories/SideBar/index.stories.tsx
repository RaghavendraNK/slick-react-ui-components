import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBar, Props } from '../../components/SideBar/index';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Home from '@material-ui/icons/Home';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';
import Button from '../../components/Button';
export default {
    argTypes: {},
    component: SideBar,
    title: 'SideBar',
} as Meta;

const Template: Story<Props> = (args) => <SideBar {...args} />;

const defaultLogo = (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='20' cy='20' r='19.5' fill='#EEEEEE' stroke='#BDBDBD' />
    </svg>
);

export const SideMenuDesktop = Template.bind({});
let selectedItem = 'Home';
SideMenuDesktop.args = {
    isTabletOrMobile: false,
    selectedItem,
    mainMenuItems: [
        {
            icon: <Home />,
            title: 'Home',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <FolderSpecialIcon />,
            title: 'Logistics',
        },
    ],
    footerMenuItems: [
        {
            icon: <SettingsIcon />,
            title: 'Settings',
        },
        {
            icon: <ContactSupportIcon />,
            title: 'Support',
        },
        {
            icon: <ExitToAppIcon />,
            title: 'Logout',
        },
    ],
    handleMenuClick: () => {},
    profileDetails: (
        <Fragment>
            <div className='profile-details-section'>
                <div className='profile-image'>{defaultLogo}</div>
                <div className='profile-detail'>
                    <SubTitle size={1} text='John Doe' />
                    <Text type='caption' text='Adminstrator' />
                </div>
            </div>
            <div className='manage-profile'>
                <Button id='manageProfile' label='Manage profile' variant='text' />
            </div>
        </Fragment>
    ),
};

export const SideMenuMobile = Template.bind({});
SideMenuMobile.args = {
    handleSideBarMenuClose: (flag) => {},
    isOpen: false,
    isTabletOrMobile: false,
    selectedItem,
    mainMenuItems: [
        {
            icon: <Home />,
            title: 'Home',
        },
        {
            icon: <EventNoteIcon />,
            title: 'Events',
        },
        {
            icon: <FolderSpecialIcon />,
            title: 'Logistics',
        },
    ],
    footerMenuItems: [
        {
            icon: <SettingsIcon />,
            title: 'Settings',
        },
        {
            icon: <ContactSupportIcon />,
            title: 'Support',
        },
    ],
    handleMenuClick: () => {},
};
