import React from 'react';
import classNames from 'classnames';

export interface ListItem {
    description?: string;
    icon: JSX.Element;
    path: string;
    title: string;
}
export interface Props {
    handleMenuClick?: Function;
    items: Array<ListItem>;
    selectedItem?: string;
}

export const ListItems = (props: Props): JSX.Element => {
    const { items, selectedItem, handleMenuClick } = props;
    const handleSelectedMenuItem = (selected: ListItem) => {
        if (handleMenuClick) {
            handleMenuClick(selected);
        }
    };
    return (
        <div id='RRUCListItem'>
            {items &&
                items.length > 0 &&
                items.map((item, index) => {
                    const { icon, title } = item;
                    const listItem = classNames('list-item', {
                        active: selectedItem === title,
                    });
                    return (
                        <div
                            key={`list-item-${index}`}
                            className={listItem}
                            onClick={() => handleSelectedMenuItem(item)}
                        >
                            <div className='list-icon'>{icon}</div>
                            <div className='list-title'>{title}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ListItems;
