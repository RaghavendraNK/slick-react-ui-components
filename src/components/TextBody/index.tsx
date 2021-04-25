import React from 'react';
import classNames from 'classnames';

export interface Props {
    size: 1 | 2;
    text: string;
}

export const TextBody = (props: Props): JSX.Element => {
    const { size, text } = props;
    const textBodyClass = classNames('textbody', {
        'textbody-one': size === 1,
        'textbody-two': size === 2,
    });
    return (
        <div id='RRUCTextBody'>
            <div className={textBodyClass}>{text}</div>
        </div>
    );
};

export default TextBody;
