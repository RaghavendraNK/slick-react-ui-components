import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import Button from '../Button';
import TextField, { Option } from '../TextField';
import GridContainer, { SIZES } from '../GridContainer';
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
export const Form = (props: Props): JSX.Element => {
    const { name, initialValues, schema, handleFormSubmit, formList, submitBtnText } = props;

    const isError = (errors: object, touched: object, key: string): boolean => {
        return errors[key] && touched[key];
    };
    const getMessage = (
        errors: object,
        touched: object,
        key: string,
        element: FORMLISTITEM
    ): string => {
        if (isError(errors, touched, key)) {
            return errors[key];
        } else if (element.helperText) {
            return element.helperText;
        } else {
            return '';
        }
    };
    /**
     *
     * @param element : Element properties ex: id, label, inputProps etc..,
     * @param values : list which contains the form field values
     * @param errors : form error objects
     * @param touched : form elements touched object
     * @param handleChange : function to update the values for the field
     * @returns: form element like <TextField>, <Select>
     */
    const getElementByType = (
        element: FORMLISTITEM,
        values: any,
        errors: object,
        touched: object,
        handleChange: any
    ) => {
        const { type, colcss, name } = element;
        switch (type) {
            case 'TextField':
            default:
                return (
                    <div className={colcss}>
                        <TextField
                            {...element}
                            value={values[name]}
                            error={isError(errors, touched, name)}
                            helperText={getMessage(errors, touched, name, element)}
                            onChange={handleChange}
                        />
                    </div>
                );
        }
    };
    /**
     *
     * @param cols : for each row multiple column fields
     * @param values : list of form field values
     * @param errors : form errors object
     * @param touched : form touched object
     * @param handleChange : callback function to update the form field value
     * @returns
     */
    const getElement = (
        cols: FORMLISTITEM[],
        values: any,
        errors: object,
        touched: object,
        handleChange: any
    ) => {
        return cols.map((element: FORMLISTITEM) => {
            return getElementByType(element, values, errors, touched, handleChange);
        });
    };
    /**
     * @return <form /> component with validation and responsive positioning
     */
    return (
        <div id='RRUCForm'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    handleFormSubmit(values, actions);
                }}
            >
                {(props: any) => {
                    const { values, errors, touched, handleChange } = props;
                    return (
                        <div className='page-form'>
                            <FormikForm onSubmit={props.handleSubmit}>
                                {formList &&
                                    formList.length > 0 &&
                                    formList.map((formRow: FORMLIST, index: number) => {
                                        const { sizes, cols } = formRow;
                                        return (
                                            cols && (
                                                <GridContainer
                                                    spacing={2}
                                                    key={`form-${name}-${index}`}
                                                    name={name}
                                                    items={getElement(
                                                        cols,
                                                        values,
                                                        errors,
                                                        touched,
                                                        handleChange
                                                    )}
                                                    sizes={sizes}
                                                    containerCss='form-row'
                                                    itemCss='form-col-wrapper'
                                                />
                                            )
                                        );
                                    })}
                                <div className='page-form-actions'>
                                    <Button
                                        id='submitBtn'
                                        variant='filled'
                                        label={submitBtnText}
                                        dense={40}
                                        type='submit'
                                    />
                                </div>
                            </FormikForm>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Form;
