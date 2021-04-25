import React from 'react';

export interface Props {
    seperator?: string | JSX.Element;
}

/**
 *
 * @param text : to be shown in between of horizontal line
 * @returns
 */
export const Divider = ({ seperator }: Props): JSX.Element => {
    return (
        <div id='RRUCDivider'>
            <div className='rule-left'></div>
            {seperator && <div className='rule-text'>{seperator}</div>}
            <div className='rule-right'></div>
        </div>
    );
};

export default Divider;
