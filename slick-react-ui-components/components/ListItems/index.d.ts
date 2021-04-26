export interface IListItem {
    description?: string;
    icon: JSX.Element;
    path?: string;
    title: string;
}
export interface Props {
    handleMenuClick?: Function;
    items: Array<IListItem> | undefined;
    selectedItem?: string;
}
export declare const ListItems: (props: Props) => JSX.Element;
export default ListItems;
