/**
 * * seperator: optional string|JSX.Element displayed in between of the horizontal divider
 */
export interface Props {
    seperator?: string | JSX.Element;
}
/**
 *
 * @param text : to be shown in between of horizontal line
 * @returns
 */
export declare const Divider: ({ seperator }: Props) => JSX.Element;
export default Divider;
