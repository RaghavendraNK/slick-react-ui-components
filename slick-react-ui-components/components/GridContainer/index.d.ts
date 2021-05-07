/// <reference types="react" />
import { GridSpacing } from '@material-ui/core/Grid';
declare type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type Item = JSX.Element | string | number;
/**
 * * xs: width of the eleemnt in extra small devices
 * * small: width of the eleemnt in small devices
 * * md: width of the eleemnt in medium devices
 * * lg: width of the eleemnt in large devices
 */
export interface BreakPointType {
    xs?: Size;
    sm?: Size;
    md?: Size;
    lg?: Size;
}
/**
 * * containerCss: optinal string for styling the container with custom styling
 * * itemCss: optinal string for styling the item with custom styling
 * * items: list of  grid item elements
 * * name: unique string for each container
 * * sizes: optinal breakpoint  units for the grid elements
 * * spacing: margin and padding for the grid elements
 */
export interface Props {
    containerCss?: string;
    itemCss?: string;
    items: Item[];
    name: string;
    sizes?: BreakPointType;
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
