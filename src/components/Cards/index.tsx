import classNames from 'classnames';
import React, { Fragment } from 'react';
import Button from '../Button';
import SubTitle from '../SubTitle';
import Text from '../Text';
import Heading from '../Heading';
import TextBody from '../TextBody';

interface ActionItem {
    key: string;
    label: string;
    icon: JSX.Element;
    type: string;
    path: string;
}

/*interface StatisticsCardItem {
    count: number;
    header: string;
    description: string;
    actions: ActionItem[];
}

interface CardMenu {
    icon: JSX.Element;
    title: string;
    description: string;
}*/

export interface Props {
    type: 'simple' | 'cardmenu' | 'statistics';
    cardDetails: any;
    content?: JSX.Element;
}

export const Card = (props: Props): JSX.Element => {
    const { content, type, cardDetails } = props;
    const getCardContentByType = (type: string): JSX.Element => {
        switch (type) {
            case 'cardmenu': {
                if (cardDetails) {
                    const { icon, title, description } = cardDetails;
                    return (
                        <div className='card-menu'>
                            <div className='card-item'>
                                <div className='icon'>{icon}</div>
                                <div className='content'>
                                    <SubTitle size={1} text={title} />
                                    <Text type='caption' text={description} />
                                </div>
                            </div>
                        </div>
                    );
                }
                return <Fragment></Fragment>;
            }
            case 'statistics': {
                if (cardDetails) {
                    const { count, header, description, actions } = cardDetails;
                    const countClass = classNames('card-item', {
                        zeroclass: count === 0,
                    });
                    const btnActions: ActionItem[] | undefined =
                        count > 0
                            ? actions
                            : actions?.filter((action: ActionItem) => action.type !== 'edit');

                    return (
                        <div className='card-stats'>
                            <div className={countClass}>
                                <Heading size={3} text={count} />
                                <Heading size={6} text={header} />
                                <TextBody size={2} text={description} />
                            </div>
                            <Fragment>
                                {btnActions && btnActions.length > 0 && (
                                    <div className='card-actions'>
                                        {btnActions.map((actionItem: ActionItem, index: number) => {
                                            const { key, label, icon } = actionItem;
                                            return (
                                                <div
                                                    key={`home-action-btn-${index}-${key}`}
                                                    className='card-btn-wrapper'
                                                >
                                                    <Button
                                                        id={key}
                                                        label={label}
                                                        startIcon={icon}
                                                        onClick={() => {}}
                                                        variant='text'
                                                        dense={40}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </Fragment>
                        </div>
                    );
                }
                return <Fragment></Fragment>;
            }
            case 'simple':
            default:
                return <Fragment>{content}</Fragment>;
        }
    };
    return <div id='RRUCCard'>{getCardContentByType(type)}</div>;
};

export default Card;
