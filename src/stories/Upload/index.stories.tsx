import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Upload, Props } from '../../components/Upload';

export default {
    argTypes: {},
    component: Upload,
    title: 'Upload',
} as Meta;

const Template: Story<Props> = (args) => <Upload {...args} />;

export const UploadContainer = Template.bind({});
UploadContainer.args = {};
