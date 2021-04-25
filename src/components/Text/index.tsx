import React from 'react';
import classNames from 'classnames';

export interface Props {
    text: string;
    type: string;
}

export const Text = (props: Props): JSX.Element => {
    const { type, text } = props;
    const textBodyClass = classNames('text', {
        caption: type === 'caption',
        overline: type === 'overline',
    });
    return (
        <div id='RRUCText'>
            <div className={textBodyClass}>{text}</div>
        </div>
    );
};

export default Text;
