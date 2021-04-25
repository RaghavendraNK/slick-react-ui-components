export interface ListItem {
    description?: string;
    icon: JSX.Element;
    path: string;
    title: string;
}
export interface Props {
    handleMenuClick?: Function;
    items: Array<ListItem>;
    selectedItem?: string;
}
export declare const ListItems: (props: Props) => JSX.Element;
export default ListItems;
