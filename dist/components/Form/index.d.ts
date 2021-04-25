import { Option } from '../TextField';
import { SIZES } from '../GridContainer';
import { OutlinedTextFieldProps } from '@material-ui/core';
export interface FORMLISTITEM extends OutlinedTextFieldProps {
    colcss?: string;
    format?: string;
    helperText?: string;
    name: string;
    options?: Array<Option>;
    type: string;
}
export interface FORMLIST {
    cols: FORMLISTITEM[];
    sizes?: SIZES;
}
export interface Props {
    formList: FORMLIST[];
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
