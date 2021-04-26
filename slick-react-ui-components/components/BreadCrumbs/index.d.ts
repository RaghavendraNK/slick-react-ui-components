export interface IBreadCrumb {
    id: string;
    label: string;
    path: string;
}
export interface Props {
    handleClick?: Function;
    paths: IBreadCrumb[];
}
/**
 * * Based on paths array return the breadcrumbs and set active all the links except current link
 */
export declare const BreadCrumbs: (props: Props) => JSX.Element;
export default BreadCrumbs;
