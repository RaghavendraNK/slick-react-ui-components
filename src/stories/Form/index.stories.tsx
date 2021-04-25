import React from 'react';
import * as Yup from 'yup';
import { Story, Meta } from '@storybook/react';
import { Form, FORMLIST, Props } from '../../components/Form';

export default {
    title: 'Form',
    component: Form,
    argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;
export const FormElements = Template.bind({});

const schema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    emailId: Yup.string().email('Invalid email').required('Required'),
});

const formList: FORMLIST[] = [
    {
        sizes: { xs: 12, sm: 12, md: 4, lg: 4 },
        cols: [
            {
                colcss: 'page-form-col',
                name: 'firstName',
                type: 'TextField',
                variant: 'outlined',
                label: 'First name',
            },
            {
                colcss: 'page-form-col',
                name: 'lastName',
                type: 'TextField',
                variant: 'outlined',
                label: 'Last name',
            },
            {
                colcss: 'page-form-col',
                name: 'inital',
                type: 'TextField',
                variant: 'outlined',
                label: 'inital name',
            },
        ],
    },
    {
        sizes: { xs: 12, sm: 12, md: 6, lg: 6 },
        cols: [
            {
                colcss: 'page-form-col',
                name: 'emailId',
                type: 'TextField',
                variant: 'outlined',
                label: 'Email ID',
            },
            {
                colcss: 'page-form-col',
                name: 'mobileNumber',
                type: 'TextField',
                variant: 'outlined',
                label: 'Mobile number',
                format: '+91 ##########',
                helperText: '+91 ##########',
            },
        ],
    },
    {
        sizes: { xs: 12, sm: 12, md: 6, lg: 6 },
        cols: [
            {
                colcss: 'page-form-col',
                name: 'professtion',
                type: 'TextField',
                variant: 'outlined',
                label: 'Profession',
                options: [
                    {
                        value: 'Teaching',
                        label: 'Teaching',
                    },
                    {
                        value: 'Non Teaching',
                        label: 'Non Teaching',
                    },
                ],
            },
        ],
    },
];

const initialValues = {
    emailId: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    professtion: '',
};

FormElements.args = {
    formList: formList,
    handleFormSubmit: () => {},
    initialValues: initialValues,
    name: 'uniqueName',
    schema: schema,
    submitBtnText: 'Button',
};
