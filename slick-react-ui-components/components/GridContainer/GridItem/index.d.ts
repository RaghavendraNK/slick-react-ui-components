/// <reference types="react" />
import { Item, BreakPointType } from '../index';
/**
 * * item: element to be displayed in the grid system
 * * styling classname so developer can write custom styling for the element
 * * breakpoint values xs, sm, md  and lg to fit the element into responsive layout
 */
export interface Props {
    item: Item;
    itemCss: string;
    sizes: BreakPointType;
}
export declare const GridItem: (props: Props) => JSX.Element;
export default GridItem;
