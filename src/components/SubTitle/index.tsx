import React from 'react';
import classNames from 'classnames';

export interface Props {
    size: 1 | 2;
    text: string;
}

export const SubTitle = (props: Props): JSX.Element => {
    const { size, text } = props;
    const subTitleClass = classNames('subtitle', {
        'subtitle-one': size === 1,
        'subtitle-two': size === 2,
    });
    return (
        <div id='RRUCSubTitle'>
            <div className={subTitleClass}>{text}</div>
        </div>
    );
};

export default SubTitle;
