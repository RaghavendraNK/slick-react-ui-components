import { Item, SIZES } from '../index';
export interface Props {
    item: Item;
    itemCss: string;
    sizes: SIZES;
}
export declare const GridItem: (props: Props) => JSX.Element;
export default GridItem;
