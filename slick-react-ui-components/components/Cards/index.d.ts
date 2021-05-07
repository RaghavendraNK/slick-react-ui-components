/// <reference types="react" />
export interface Props {
    type: 'Custom' | 'CardIcon' | 'CardAction' | 'CardContent';
    details: any;
    content?: JSX.Element;
    handleClick?: (item: any) => void;
}
export declare const Card: (props: Props) => JSX.Element;
export default Card;
