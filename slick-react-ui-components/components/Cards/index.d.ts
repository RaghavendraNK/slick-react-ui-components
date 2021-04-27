export interface Props {
    type: 'simple' | 'cardmenu' | 'statistics';
    details: any;
    content?: JSX.Element;
    handleClick?: Function;
}
export declare const Card: (props: Props) => JSX.Element;
export default Card;
