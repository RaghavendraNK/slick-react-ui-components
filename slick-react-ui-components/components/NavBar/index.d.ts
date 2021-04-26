import { IListItem } from '../ListItems';
export interface Props {
    footerMenuItems?: Array<IListItem>;
    handleMenuClick?: (menuItem: IListItem) => void;
    isTabletOrMobile?: boolean;
    logo?: JSX.Element;
    mainMenuItems?: Array<IListItem>;
    onMenuClick?: Function;
    profileDetails?: JSX.Element;
}
export interface MENU {
    anchorEl: Element | null;
    footerMenuItems?: Array<IListItem>;
    handleClose: (event: {}, reason: string) => void;
    handleMenuClick?: (menuItem: IListItem) => void;
    mainMenuItems?: Array<IListItem>;
}
export declare const NavBarMenu: ({ anchorEl, footerMenuItems, handleClose, handleMenuClick, mainMenuItems, }: MENU) => JSX.Element;
export declare const NavBar: (props: Props) => JSX.Element;
export default NavBar;
