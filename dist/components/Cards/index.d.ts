export interface Props {
    type: 'simple' | 'cardmenu' | 'statistics';
    cardDetails: any;
    content?: JSX.Element;
}
export declare const Card: (props: Props) => JSX.Element;
export default Card;
