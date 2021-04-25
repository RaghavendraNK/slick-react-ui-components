import React from 'react';
import classNames from 'classnames';

export interface Props {
    size: 1 | 2 | 3 | 4 | 5 | 6;
    text: string | number;
}

export const Heading = (props: Props): JSX.Element => {
    const { size, text } = props;
    const headingClass = classNames('heading', {
        h1: size === 1,
        h2: size === 2,
        h3: size === 3,
        h4: size === 4,
        h5: size === 5,
        h6: size === 6,
    });
    return (
        <div id='RRUCHeading'>
            <div className={headingClass}>{text}</div>
        </div>
    );
};

export default Heading;
