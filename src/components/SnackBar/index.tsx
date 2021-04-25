import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export interface Props {
    horizontal?: 'left' | 'center' | 'right';
    messasge: string;
    onClose: Function;
    open: boolean;
    vertical?: 'top' | 'bottom';
}

export const SnackBar = (props: Props): JSX.Element => {
    const { vertical = 'top', horizontal = 'center', open, onClose, messasge } = props;
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };
    return (
        <div id='RRUCSnackBar'>
            <Snackbar
                autoHideDuration={6000}
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={messasge}
                key={vertical + horizontal}
                action={
                    <IconButton
                        size='small'
                        aria-label='close'
                        color='inherit'
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                }
            />
        </div>
    );
};

export default SnackBar;
