export interface Props {
    horizontal?: 'left' | 'center' | 'right';
    messasge: string;
    onClose: Function;
    open: boolean;
    vertical?: 'top' | 'bottom';
}
export declare const SnackBar: (props: Props) => JSX.Element;
export default SnackBar;
