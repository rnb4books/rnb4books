import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Grid from '@material-ui/core/Grid';
import {mainPallete} from "../../layout/colors";
import OfferInputDetails from "./OfferInputDetails";


const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'left',
        paddingTop: theme.spacing.unit * 3,
        backgroundColor: mainPallete.smokeyBlackDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grow: {
        flexGrow: 1,
    },
    main: {
        display: 'flex',
        flex: 2,
        marginRight: '8%',
        marginLeft: '8%',
    },
});

class AddOfferPage extends React.Component {
    state = {};

    render() {
        const {classes} = this.props;
        const bookDetails = {
            bookCoverImage: 'nophoto.jpg',
            info: {
                title: '1984',
                author: 'George Orwell',
            }
        };
        return (
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="left"
                    alignItems="top">
                    <div className={classes.main}>
                        <Grid
                            container
                            direction="column"
                            justify="top"
                            alignItems="left">
                            <OfferInputDetails
                                rateDisabled={bookDetails.rateDisabled}
                                bookCoverImage={bookDetails.bookCoverImage}
                                info={bookDetails.info}
                            />
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}

AddOfferPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(AddOfferPage));
