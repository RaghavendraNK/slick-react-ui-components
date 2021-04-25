import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavBar, Props } from '../../components/NavBar/index';
import Logo from '../../components/Logo';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
const avatar = (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='20' cy='20' r='19.5' fill='#EEEEEE' stroke='#BDBDBD' />
    </svg>
);

export default {
    argTypes: {},
    component: NavBar,
    title: 'NavBar',
    parameters: {
        chromatic: { disable: true },
    },
} as Meta;

const Template: Story<Props> = (args) => <NavBar {...args} />;
export const NavigationBar = Template.bind({});
NavigationBar.args = {
    isTabletOrMobile: true,
    logo: <Logo isLogoWithTitle />,
    mainMenuItems: [
        {
            icon: <PersonIcon />,
            title: 'Profile',
            description: 'Manage your personal details, passwords and more',
        },
    ],
    footerMenuItems: [
        {
            icon: <ExitToAppIcon />,
            title: 'Logout',
        },
    ],
    profileDetails: (
        <div className='profile'>
            <div className='icon'>{avatar}</div>
        </div>
    ),
    handleMenuClick: () => {},
};

export const DesktopNavigationBar = Template.bind({});
DesktopNavigationBar.args = {
    isTabletOrMobile: false,
    logo: <Logo isLogoWithTitle />,
    mainMenuItems: [
        {
            icon: <PersonIcon />,
            title: 'Profile',
            description: 'Manage your personal details, passwords and more',
        },
    ],
    footerMenuItems: [
        {
            icon: <ExitToAppIcon />,
            title: 'Logout',
        },
    ],
    profileDetails: (
        <div className='profile'>
            <div className='detail'>
                <SubTitle size={1} text='John Doe' />
                <Text type='caption' text='Adminstrator' />
            </div>
            <div className='icon'>{avatar}</div>
        </div>
    ),
    handleMenuClick: () => {},
};
