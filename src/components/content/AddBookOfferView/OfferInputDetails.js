import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';


const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'inherit',
        marginBottom: '40px',
    },
    card: {
        display: 'flex',
        flex: 1,
        maxHeight: '600px',
        flexDirection: 'column',
        backgroundColor: mainPallete.licorice,
    },
    media: {
        height: 333,
        width: 236,
        display: 'flex',
        flex: 1,
        margin: '30px',
    },
    pictureSection: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        flex: 1,
        alignItems: 'space-around',

    },
    picture: {
        margin: '10px',
        backgroundColor: mainPallete.eerieBlack,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 50,
    },
    slider: {
        paddingTop: '15px',
        paddingBottom: '15px'
    },
    buttonSection: {
        backgroundColor: mainPallete.eerieBlack,
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        flexDirection: 'column',
        display: 'flex',
        padding: '15px',
        flex: 1,
        paddingBottom: theme.spacing.unit,
        justifyContent: 'space-around'
    },
    button: {
        margin: '10px',
    },
    infoHeader: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '10px',
        justifyContent: 'flex-end'
    },
    infoPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        backgroundColor: mainPallete.eerieBlack,
        paddingLeft: '15px',
        paddingBottom: theme.spacing.unit * 3
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
        padding: theme.spacing.unit * 2,
    },
    labels: {
        paddingRight: '25%',
        paddingTop: '10px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-evenly"

    },
    values: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        justifyContent: "space-evenly",
        paddingRight: '5px'
    },
    bookmarkIcon: {
        fontSize: 80,
        color: mainPallete.whiteSmokeLight,
        padding: '0px',
        margin: '0px',
        alignSelf: 'flex-start',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
});

class OfferInputDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            condition: 1,
            publisher: "",
            language: "",
            bookCoverType: "",
            description: ""
        };
    }

    handleSlider = (event, value) => {
        this.setState({condition: value});
    };


    render() {
        const logo = require('../../../static/' + this.props.bookCoverImage);
        const {classes, info} = this.props;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <div className={classes.pictureSection}>
                            <div className={classes.picture}>
                                <CardMedia
                                    className={classes.media}
                                    image={logo}
                                    title="Book cover">
                                    <div>
                                        <BookmarkIcon className={classes.bookmarkIcon}>
                                        </BookmarkIcon>
                                    </div>
                                </CardMedia>

                            </div>
                            <div className={classes.buttonSection}>
                                <Button className={classes.button}>Add Picture</Button>
                                <Button className={classes.button}>Create rent offer</Button>
                            </div>
                        </div>
                        <div className={classes.bookInfo}>
                            <div className={classes.info}>
                                <div className={classes.infoHeader}>
                                    <TextField defaultValue={info.title} className={classes.title}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.title,
                                                   },
                                               }}/>
                                    <Typography variant="h6">
                                        {info.author}
                                    </Typography>
                                </div>
                            </div>

                            <div className={classes.infoPanel}>
                                <Grid
                                    container
                                    direction="row"
                                >
                                    <div className={classes.labels}>
                                        <Typography variant='h6'> Address:</Typography>
                                        <Typography variant='h6'> Condition:</Typography>
                                        <Typography variant='h6'> Max rent time:</Typography>
                                        <Typography variant='h6'> Publisher:</Typography>
                                        <Typography variant='h6'> Language:</Typography>
                                        <Typography variant='h6'> Book cover type:</Typography>
                                        <Typography variant='h6'> Additional comments:</Typography>

                                    </div>
                                    <div className={classes.values}>
                                        <TextField placeholder={"Pickup address"}/>
                                        <Slider
                                            className={classes.slider}
                                            value={this.state.condition}
                                            min={0}
                                            max={6}
                                            step={1}
                                            onChange={this.handleSlider}
                                        />
                                        <TextField placeholder={"Max rent duration"}/>
                                        <TextField placeholder={"Publisher"}/>
                                        <TextField placeholder={"Language"}/>
                                        <TextField placeholder={"Hardcover, paperback..."}/>
                                        <TextField placeholder={"Optional description"} multiline={true}
                                                   rows={2}
                                                   rowsMax={4}/>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

OfferInputDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    info: PropTypes.object
};

OfferInputDetails.defaultProps = {
    bookCoverImage: '',
    info: {
        title: '',
        address: '',
        condition: '',
        maxRentTime: '',
        publisher: '',
        language: '',
        bookCoverType: '',
        description: ''
    }
}

export default withRoot(withStyles(styles)(OfferInputDetails));
