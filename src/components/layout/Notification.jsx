import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { mainPallete } from './colors';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/CheckCircleOutlined';
import  Close from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
    root: {
        marginTop: '2%',
        display: 'flex',
    },
    content: {
        backgroundColor: mainPallete.vividMalachite,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    span: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',

    },
    checkIcon: {
        color: 'white',
        margin: '10px'
    },
});


class Notification extends React.Component {
    state = {
    };



    render() {
        const { classes, message, isOpen, handleClose } = this.props;
        return (
            <Snackbar
                className={classes.root}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent
                    className={classes.content}
                    aria-describedby="client-snackbar"
                    message={
                        <span
                            id="client-snackbar"
                            className={classes.span}>
                            <CheckIcon
                                className={classes.checkIcon} />
                            <Typography >
                                {message}
                            </Typography>
                        </span>
                    }
                    action={[
                        <Close
                            onClick={handleClose} />
                    ]}
                />
            </Snackbar>
        );
    }
}

Notification.propTypes = {
    isOpen: PropTypes.bool,
    message: PropTypes.string,
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func
};

Notification.defaultProps = {
    isOpen: false,
    message: '',
    classes: {},
    handleClose: () => { }
}

export default withStyles(styles)(Notification);
