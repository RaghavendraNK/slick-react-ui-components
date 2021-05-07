/// <reference types="react" />
export interface Props {
    id: string;
    status: string;
    message: string;
    helpertext: string;
    handleCloseClick: (id: string) => void;
}
export declare const Notifier: (props: Props) => JSX.Element;
export default Notifier;
