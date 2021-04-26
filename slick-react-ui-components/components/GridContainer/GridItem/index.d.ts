import { Item, IBreakPoint } from '../index';
export interface Props {
    item: Item;
    itemCss: string;
    sizes: IBreakPoint;
}
export declare const GridItem: (props: Props) => JSX.Element;
export default GridItem;
