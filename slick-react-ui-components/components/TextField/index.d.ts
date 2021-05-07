/// <reference types="react" />
import { OutlinedTextFieldProps } from '@material-ui/core';
export interface Option {
    label: string;
    value: string | number;
}
export interface Props extends OutlinedTextFieldProps {
    format?: string;
    options?: Array<Option>;
    value?: number | string | null;
}
export declare const TextField: (props: Props) => JSX.Element;
export default TextField;
