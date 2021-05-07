/// <reference types="react" />
import { ListItemType } from '../ListItems';
export interface Props {
    footerMenuItems?: Array<ListItemType>;
    handleMenuClick?: (menuItem: ListItemType) => void;
    isTabletOrMobile?: boolean;
    logo?: JSX.Element;
    mainMenuItems?: Array<ListItemType>;
    onMenuClick?: Function;
    profileDetails?: JSX.Element;
}
export interface MENU {
    anchorEl: Element | null;
    footerMenuItems?: Array<ListItemType>;
    handleClose: (event: {}, reason: string) => void;
    handleMenuClick?: (menuItem: ListItemType) => void;
    mainMenuItems?: Array<ListItemType>;
}
export declare const NavBarMenu: ({ anchorEl, footerMenuItems, handleClose, handleMenuClick, mainMenuItems, }: MENU) => JSX.Element;
export declare const NavBar: (props: Props) => JSX.Element;
export default NavBar;
