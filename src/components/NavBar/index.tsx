import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem, Menu } from '@material-ui/core';
import { ListItem } from '../ListItems';

import Text from '../Text';
import TextBody from '../TextBody';

export interface Props {
    footerMenuItems?: Array<ListItem>;
    handleMenuClick?: (menuItem: ListItem) => void;
    isTabletOrMobile?: boolean;
    logo?: JSX.Element;
    mainMenuItems?: Array<ListItem>;
    onMenuClick?: Function;
    profileDetails?: JSX.Element;
}

export interface MENU {
    anchorEl: Element | null;
    footerMenuItems?: Array<ListItem>;
    handleClose: (event: {}, reason: string) => void;
    handleMenuClick?: (menuItem: ListItem) => void;
    mainMenuItems?: Array<ListItem>;
}

export const NavBarMenu = ({
    anchorEl,
    footerMenuItems,
    handleClose,
    handleMenuClick,
    mainMenuItems,
}: MENU): JSX.Element => {
    const handleMenuItemClick = (menuItem: ListItem) => {
        if (handleMenuClick) {
            handleMenuClick(menuItem);
        }
    };
    return (
        <div id='RRUCNavBarMenu'>
            <Menu
                className='RRUCNavBarMenuWrapper'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {mainMenuItems &&
                    mainMenuItems.length > 0 &&
                    mainMenuItems.map((item: ListItem, index: number) => {
                        const { icon, title, description } = item;
                        return (
                            <MenuItem
                                key={`main-menu-${title}-${index}`}
                                disableRipple
                                onClick={() => handleMenuItemClick(item)}
                                className='main-menu-item'
                            >
                                <div className='icon'>{icon}</div>
                                <div className='details'>
                                    {title && <TextBody text={title} size={1} />}
                                    {description && <Text type='caption' text={description} />}
                                </div>
                            </MenuItem>
                        );
                    })}

                {footerMenuItems &&
                    footerMenuItems.length > 0 &&
                    footerMenuItems.map((item: ListItem, index: number) => {
                        const { icon, title, description } = item;
                        return (
                            <MenuItem
                                key={`footer-menu-${title}-${index}`}
                                disableRipple
                                onClick={() => handleMenuItemClick(item)}
                                className='footer-menu-item'
                            >
                                <div className='icon'>{icon}</div>
                                <div className='details'>
                                    {title && <TextBody text={title} size={1} />}
                                    {description && <Text type='caption' text={description} />}
                                </div>
                            </MenuItem>
                        );
                    })}
            </Menu>
        </div>
    );
};

export const NavBar = (props: Props): JSX.Element => {
    const {
        isTabletOrMobile,
        onMenuClick,
        logo,
        profileDetails,
        mainMenuItems,
        footerMenuItems,
        handleMenuClick,
    } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOnMenuClick = () => {
        if (onMenuClick) {
            onMenuClick();
        }
    };
    const handleMenuChange = (event: any) => {
        if (
            (mainMenuItems && mainMenuItems.length > 0) ||
            (footerMenuItems && footerMenuItems.length > 0)
        ) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div id='RRUCNavBar'>
            {isTabletOrMobile && (
                <div className='menu-icon' onClick={() => handleOnMenuClick()}>
                    <MenuIcon />
                </div>
            )}
            {logo && <div className='logo'>{logo}</div>}
            {profileDetails && (
                <div onClick={(event) => handleMenuChange(event)}>{profileDetails}</div>
            )}
            <NavBarMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                mainMenuItems={mainMenuItems}
                footerMenuItems={footerMenuItems}
                handleMenuClick={(selectedMenu: ListItem) => {
                    if (handleMenuClick) {
                        handleMenuClick(selectedMenu);
                    }
                }}
            />
        </div>
    );
};

export default NavBar;
