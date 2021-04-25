import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { TextBody } from '../TextBody';
import { Text } from '../Text';
export interface Props {}

export const Upload = (): JSX.Element => {
    return (
        <div id='RRUCUpload'>
            <div className='uploadIcon'>
                <CloudUploadIcon />
            </div>
            <TextBody size={1} text='Upload a file' />
            <Text type='caption' text='File should be less than 10mb' />
        </div>
    );
};

export default Upload;
