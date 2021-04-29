/**
 * * description: optional srting for list element
 * * icon: icon for list item
 *
 */
export interface ListItemType {
    description?: string;
    icon: JSX.Element;
    path?: string;
    title: string;
}
export interface Props {
    handleMenuClick?: (selected: ListItemType) => void;
    items: Array<ListItemType> | undefined;
    selectedItem?: string;
}
export declare const ListItems: (props: Props) => JSX.Element;
export default ListItems;
