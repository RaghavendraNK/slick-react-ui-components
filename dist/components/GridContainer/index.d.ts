import { GridSpacing } from '@material-ui/core/Grid';
declare type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type Item = JSX.Element | string | number;
export interface SIZES {
    xs?: Size;
    sm?: Size;
    md?: Size;
    lg?: Size;
}
export interface Props {
    containerCss?: string;
    itemCss?: string;
    items: Item[];
    name: string;
    sizes?: SIZES;
    spacing?: GridSpacing;
}
/**
 *
 * @param items : grid rows and columns items
 * @param name : unique name for grid container
 * @param size: size based on the aspect ratio
 * @param containerCss : grid main class
 * @param itemCss: grid row main class
 * @returns <GridContainer />
 */
export declare const GridContainer: ({ items, name, sizes, containerCss, itemCss, spacing, }: Props) => JSX.Element;
export default GridContainer;
