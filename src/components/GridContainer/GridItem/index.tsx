import React from 'react';
import { Grid } from '@material-ui/core';
import { Item, SIZES } from '../index';

export interface Props {
    item: Item;
    itemCss: string;
    sizes: SIZES;
}

export const GridItem = (props: Props): JSX.Element => {
    const { sizes, item, itemCss } = props;
    const { xs, sm, md, lg } = sizes;
    return (
        <Grid id='RRUCGridItem' item xs={xs} sm={sm} md={md} lg={lg} className={itemCss}>
            {item}
        </Grid>
    );
};

export default GridItem;
