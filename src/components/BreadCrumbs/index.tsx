import React, { Fragment } from 'react';
import Button from '../Button';

export interface BreadCrumbsItem {
    id: string;
    label: string;
    path: string;
}
export interface Props {
    handleClick: Function;
    paths: BreadCrumbsItem[];
}

/**
 * * Based on paths array return the breadcrumbs and set active all the links except current link
 */
export const BreadCrumbs = (props: Props): JSX.Element => {
    const { paths, handleClick } = props;
    return (
        <div id='RRUCBreadCrumbs'>
            {paths && paths.length > 0 && (
                <div className='breadcrumbs'>
                    {paths.map((pathItem: BreadCrumbsItem, index: number) => {
                        const { id, path, label } = pathItem;
                        return (
                            <Fragment key={`breadcrumb-${index}-${id}`}>
                                {index !== 0 && <span className='bradcrumbs-divider'>/</span>}
                                {paths.length - 1 !== index && (
                                    <Fragment>
                                        <Button
                                            id={id}
                                            variant='link'
                                            label={label}
                                            onClick={() => handleClick(path)}
                                        />
                                    </Fragment>
                                )}
                                {paths.length - 1 === index && (
                                    <Fragment>
                                        <div className='greyLink'>{label}</div>
                                    </Fragment>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BreadCrumbs;
