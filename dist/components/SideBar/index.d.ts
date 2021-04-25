import { ListItem } from '../ListItems';
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
export declare const SideBar: (props: Props) => JSX.Element;
export default SideBar;
