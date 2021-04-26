import { Option } from '../TextField';
import { IBreakPoint } from '../GridContainer';
import { OutlinedTextFieldProps } from '@material-ui/core';
export interface IFormListItem extends OutlinedTextFieldProps {
    colcss?: string;
    format?: string;
    helperText?: string;
    name: string;
    options?: Array<Option>;
    type: string;
}
export interface IFormList {
    cols: IFormListItem[];
    sizes?: IBreakPoint;
}
export interface Props {
    formList: IFormList[];
    handleFormSubmit: Function;
    helperText?: string;
    initialValues: object;
    name: string;
    schema?: object;
    submitBtnText: string;
}
/**
 *
 * @param props
 * based on cols arrange the positoning of elements and based on schema do the validation
 * on submit click send back the form values
 * @returns  Form Element based on the schema validation and positions
 */
export declare const Form: (props: Props) => JSX.Element;
export default Form;
