import { IListItem } from '../ListItems';
export interface Props {
    isTabletOrMobile?: boolean;
    footerMenuItems?: Array<IListItem>;
    handleMenuClick?: Function;
    mainMenuItems: Array<IListItem>;
    profileDetails?: JSX.Element;
    selectedItem?: string;
    isOpen?: boolean;
    handleSideBarMenuClose?: Function;
}
export declare const SideBar: (props: Props) => JSX.Element;
export default SideBar;
