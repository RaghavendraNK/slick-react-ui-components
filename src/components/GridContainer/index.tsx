import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import GridItem from './GridItem';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Item = JSX.Element | string | number;
export interface SIZES {
    xs?: Size;
    sm?: Size;
    md?: Size;
    lg?: Size;
}
export interface Props {
    containerCss?: string;
    itemCss?: string;
    items: Item[];
    name: string;
    sizes?: SIZES;
    spacing?: GridSpacing;
}

/**
 *
 * @param items : grid rows and columns items
 * @param name : unique name for grid container
 * @param size: size based on the aspect ratio
 * @param containerCss : grid main class
 * @param itemCss: grid row main class
 * @returns <GridContainer />
 */
export const GridContainer = ({
    items,
    name,
    sizes = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
    },
    containerCss = '',
    itemCss = '',
    spacing = 0,
}: Props): JSX.Element => {
    return (
        <Grid id='RRUCGridContainer' container spacing={spacing} className={containerCss}>
            {items &&
                items.map((item: Item, index: number) => {
                    return (
                        <GridItem
                            key={`${name}-grid-${index}`}
                            sizes={sizes}
                            item={item}
                            itemCss={itemCss}
                        />
                    );
                })}
        </Grid>
    );
};

export default GridContainer;
