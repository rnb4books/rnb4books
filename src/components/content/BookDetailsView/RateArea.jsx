import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {mainPallete} from '../../layout/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import TextField from '@material-ui/core/TextField';
import Rating from 'material-ui-rating'


const styles = theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        margin: '1%'
    }, 
    avgRating: { 
        display: 'flex', 
        paddingBottom: '0.5%'
    }, 
    starIcon: {
        marginRight: '1%', 
        marginTop: '0.5%', 
    }, 
    userRating: {
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: mainPallete.lightGrey, 
        padding: '1%', 
    }, 
    rate: {
        display: 'flex', 
    }, 
    rateValue: {
        marginLeft: '1%'
    }, 
    commentButton: {
        display: 'flex',
    },
   buttons : {
        display: 'flex',
        alignItems: 'flex-end',
        flex: 1, 
        marginLeft: '1%',
   },
    button: {
        display: 'flex',
        margin: '5%',
        flex: 1,
    }, 
    cancelButton: {
        display: 'flex',
        margin: '5%',
        flex: 1,
        border: 'solid', 
        borderColor: mainPallete.whiteSmokeLight, 
        borderWidth: 'thin',
    },
    comment: {
        display: 'flex',
        flex: 3,
        marginLeft: '1%'

    }
});


class RateArea extends React.Component {
    state = {
        rating: 0,
        comment: ''
    };

    onDataValueChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    onCancelClick = () => {
        this.setState({
            rating: this.props.initialRating.rating,
            comment: this.props.initialRating.comment       
        });
    }

    render() {
        const { classes, info, onSubmitRating } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.avgRating}>
                    <StarIcon  color='primary' className={classes.starIcon}/>
                    <Typography component="h4" variant="h4">
                        {info.rating}
                    </Typography>
                </div>
                <div className={classes.userRating}>
                    <Typography component="h6" variant="h6">
                        Your offer rating:
                    </Typography>
                    <div className={classes.rate}>
                        <Rating
                            value={this.state.rating}
                            max={10}
                            iconFilled={<StarIcon color='primary'/>}
                            iconHovered={<StarIcon color='primary'/>}
                            onChange={(value) => this.onDataValueChange('rating', value)}
                        />
                        <Typography 
                            className={classes.rateValue} 
                            component="h4" 
                            variant="h4"
                        >
                            {this.state.rating}
                        </Typography>
                    </div>
                    <div className={classes.commentButton}>  
                        <TextField
                                className={classes.comment}
                            id="standard-with-placeholder"
                            multiline={true}
                            value={this.state.comment}
                            onChange={(e) => this.onDataValueChange('comment', e.target.value)}
                            margin="normal"
                            rows={2}
                            placeholder="Type in the comment about this rent offer"
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                        <div className={classes.buttons}>
                            <Button 
                                className={classes.cancelButton}
                                color="secondary"  
                                onClick={this.onCancelClick}
                            >
                                Cancel
                            </Button>
                            <Button 
                                className={classes.button} 
                                onClick={onSubmitRating}
                            >
                                Save rating
                            </Button>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

RateArea.propTypes = {
    initialRating: PropTypes.object,
    info: PropTypes.object, 
    onSubmitRating: PropTypes.func, 
};

RateArea.defaultProps = {
    initialRating: {
        rating: 0, 
        comment: ''
    },
    info: {},
   onSubmitRating: () => { }
}

export default withStyles(styles)(RateArea);
