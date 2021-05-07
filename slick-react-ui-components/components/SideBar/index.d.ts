/// <reference types="react" />
import { ListItemType } from '../ListItems';
export interface Props {
    isTabletOrMobile?: boolean;
    footerMenuItems?: Array<ListItemType>;
    handleMenuClick?: (selected: ListItemType) => void;
    mainMenuItems: Array<ListItemType>;
    profileDetails?: JSX.Element;
    selectedItem?: string;
    isOpen?: boolean;
    handleSideBarMenuClose?: Function;
}
export declare const SideBar: (props: Props) => JSX.Element;
export default SideBar;
