import { OutlinedTextFieldProps } from '@material-ui/core';
import { Option } from '../TextField';
import { BreakPointType } from '../GridContainer';
/**
 * * colcss: optional string applied for wrapper to the element
 * * format: optional string used for textinput for showing the different formats, ex: +87 ##### ##
 * * helperText:  optional string which will be shown below the field element
 * * name: string which used as unique key for the form field element
 * * options: for display as drop down elements
 * * type: string used to display different form field based on this property, type can be ex TextField, Select etc.,
 */
export interface FormListItemType extends OutlinedTextFieldProps {
    colcss?: string;
    format?: string;
    helperText?: string;
    name: string;
    options?: Array<Option>;
    type: string;
}
/**
 * * cols: list of form field elements
 * * sizes: breakpoints to display form elements in responsive mode
 */
export interface FormListType {
    cols: FormListItemType[];
    sizes?: BreakPointType;
}
/**
 * * formList: FormListType[];
 * *   handleFormSubmit: call back event to the parent, which will pass the modified values and actions to the parent
 * *   helperText?: optional string display on the form
 * *   initialValues: default values for the form
 * *   name: unique name for the form
 * *   schema: object with validation rules
 * *   submitBtnText: string to be displayed on the primary button
 */
export interface Props {
    formList: FormListType[];
    handleFormSubmit: (values: object, actions: object) => void;
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
