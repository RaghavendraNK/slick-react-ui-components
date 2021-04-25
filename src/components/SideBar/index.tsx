import React, { Fragment, useEffect, useRef, useState } from 'react';
import ListItems, { ListItem } from '../ListItems';

export interface Props {
    isTabletOrMobile?: boolean;
    footerMenuItems?: Array<ListItem>;
    handleMenuClick?: Function;
    mainMenuItems: Array<ListItem>;
    profileDetails?: JSX.Element;
    selectedItem?: string;
    isOpen?: boolean;
    handleSideBarMenuClose?: Function;
}

const useComponentVisible = (initialIsVisible: boolean, handleSideBarMenuClose: any) => {
    const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
    const ref: any = useRef(null);
    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
            if (handleSideBarMenuClose) {
                handleSideBarMenuClose(false);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
};

export const SideBar = (props: Props): JSX.Element => {
    const {
        selectedItem,
        mainMenuItems,
        footerMenuItems,
        handleMenuClick,
        profileDetails,
        isTabletOrMobile,
        isOpen,
        handleSideBarMenuClose,
    } = props;
    const [selectedMenu, setSelectedMenu] = useState<string>('');
    useEffect(() => {
        if (selectedItem) {
            setSelectedMenu(selectedItem);
        }
    }, [selectedItem]);

    const handleSelectedMenuItem = (selected: ListItem) => {
        if (handleMenuClick) {
            handleMenuClick(selected);
        }
    };
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(
        !!isOpen,
        handleSideBarMenuClose
    );

    useEffect(() => {
        setIsComponentVisible(!!isOpen);
    }, [isOpen]);

    const SideMenu = () => (
        <div id='RRUCSideBar'>
            {profileDetails && <div className='profile-details'>{profileDetails}</div>}
            <div className='main-menu-items'>
                <ListItems
                    items={mainMenuItems}
                    selectedItem={selectedMenu}
                    handleMenuClick={(selected: ListItem) => handleSelectedMenuItem(selected)}
                />
            </div>
            {footerMenuItems && footerMenuItems.length > 0 && (
                <div className='footer-menu-items'>
                    <ListItems
                        items={footerMenuItems}
                        selectedItem={selectedMenu}
                        handleMenuClick={(selected: ListItem) => handleSelectedMenuItem(selected)}
                    />
                </div>
            )}
        </div>
    );
    return (
        <Fragment>
            {isTabletOrMobile && isComponentVisible && (
                <div ref={ref}>
                    <SideMenu />
                </div>
            )}
            {!isTabletOrMobile && <SideMenu />}
            {isTabletOrMobile && isComponentVisible && <div className='sidebar-overlay' />}
        </Fragment>
    );
};

export default SideBar;
