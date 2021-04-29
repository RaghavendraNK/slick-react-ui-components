/**
 * * id: for unique identification for each breadcrumb item
 * * label: display string which will be shown on UI
 * * path: string contains the route where it will navigate on click
 */
export interface BreadCrumbType {
    id: string;
    label: string;
    path: string;
}
/**
 * * handleClick: optional props which call back event to pass the selected breadcrumb route path to the child
 */
export interface Props {
    handleClick?: (path: string) => void;
    paths: BreadCrumbType[];
}
/**
 * * Based on paths array return the breadcrumbs and set active all the links except current link
 */
export declare const BreadCrumbs: (props: Props) => JSX.Element;
export default BreadCrumbs;
