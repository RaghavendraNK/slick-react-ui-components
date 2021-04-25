import { ListItem } from '../ListItems';
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
export declare const NavBarMenu: ({ anchorEl, footerMenuItems, handleClose, handleMenuClick, mainMenuItems, }: MENU) => JSX.Element;
export declare const NavBar: (props: Props) => JSX.Element;
export default NavBar;
