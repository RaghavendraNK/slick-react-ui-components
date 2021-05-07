/// <reference types="react" />
/**
 * * size: H1 to H6 for header tags
 * * text: string or number to be displayed
 */
export interface Props {
    size: 1 | 2 | 3 | 4 | 5 | 6;
    text: string | number;
}
export declare const Heading: (props: Props) => JSX.Element;
export default Heading;
