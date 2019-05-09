import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/CheckCircleOutlined';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      display: 'flex',
      backgroundColor: 'inherit',
      display: 'flex',
      marginBottom: '40px',
    },
    card: {
        display: 'flex',
        flex: 1,
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
    info: {
        display: 'flex',
        flexDirection: 'row', 
        flex: 1,
        justifyContent: 'flex-end'
    },
    pictureSection: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        flex: 1,
        alignItems: 'space-around',

    },
    rentButton: {
        margin: '10px',
    }, 
    picture: {
        margin: '10px',
        backgroundColor: mainPallete.eerieBlack, 
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    rentButtonSection: {
        backgroundColor: mainPallete.eerieBlack, 
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        flexDirection: 'column',
        display: 'flex',
        padding: '15px',
        flex: 1
    },
    infoHeader: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        // paddingRight: '100px',
        margin: '10px', 
        justifyContent: 'flex-end'
    },
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        margin: '5px',
    },
    checkIcon: {
        fontSize: '90px', 
        color: mainPallete.neonGreen
    }, 
    rating: {
        display: 'flex',
        flexDirection: 'column', 
        marginBottom: '20px',
        marginTop: '20px', 
        justifyContent: 'flex-end',

    }, 
    ratingContent: {
        justifyContent: 'space-evenly',
        display: 'flex',
        paddingLeft: '15px',
        paddingRight: '250px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: mainPallete.eerieBlack, 
    },
    infoPanel: {
        display: 'flex',
        flex: 3,
        backgroundColor: mainPallete.eerieBlack, 
        paddingLeft: '15px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-around',
        flex:1 
    }, 
    labels: {
        paddingRight: '80px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly"

    }, 
    values: {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent :"space-evenly",
        paddingRight: '5px'
    }, 
    bookInfo: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        marginTop: '10px',
        marginBottom: '10px'
    }, 
    checkSection: {
        marginRight: '8%', 
        marginTop: '5px'
    }, 
    starIcon : {
        marginRight: '15px'
      }
  });
  
  class BokkDetailsMain extends React.Component {
    state = {
    };
  
    render() {
      const logo = require('../../../static/1984-1.jpg');
      const { classes } = this.props;
      return (
        <div className={classes.root}>
            <Card className={classes.card}>   
                <CardContent className={classes.cardContent}>
                    <div className={classes.pictureSection}>
                        <div className={classes.picture}>
                            <CardMedia
                                className={classes.media}
                                image={logo}
                                title="Book cover"
                            />
                        </div>
                        <div className={classes.rentButtonSection}>
                            <Button className={classes.rentButton}>RENT</Button>
                        </div>
                    </div>
                    <div className={classes.bookInfo}>
                        <div className={classes.info}>
                                <div className={classes.infoHeader}>
                                    <Typography color='secondary' component="h1" variant="h1">
                                        1984              
                                    </Typography>
                                    <Typography color='secondary' variant="h6" >
                                        George Orwell
                                    </Typography>
                                </div>
                                <Tooltip title={'Available'} className={classes.checkSection}>
                                    <CheckIcon className={classes.checkIcon}/>
                                </Tooltip>
                        </div>
                        <div className={classes.rating}>
                            <div className={classes.ratingContent}>
                            <StarIcon color='secondary' className={classes.starIcon}/>
                            <Typography color='secondary'component="h4" variant="h4">
                                8.6
                            </Typography>
                            </div>
                        </div>
                        <div className={classes.infoPanel}>
                        <Grid
                            container
                            direction="row"
                            >
                            <div className={classes.labels}>
                            <Typography color='secondary'variant='h6'> Address:</Typography>
                            <Typography color='secondary'variant='h6'> Availability:</Typography>
                            <Typography color='secondary'variant='h6'> Condition:</Typography>
                            <Typography color='secondary'variant='h6'> Max rent time:</Typography>
                            <Typography color='secondary'variant='h6'> Publisher:</Typography>
                            <Typography color='secondary'variant='h6'> Language:</Typography>
                            <Typography color='secondary'variant='h6'> Book cover type:</Typography>

                            </div>
                            <div className={classes.values}>
                            <Typography color='secondary'variant='body2' > Tokarskiego 2, Kraków</Typography>
                            <Typography color='secondary'variant='body2' > Available right now </Typography>
                            <Typography color='secondary'variant='body2' > excellent</Typography>
                            <Typography color='secondary'variant='body2' > 1 month</Typography>
                            <Typography color='secondary'variant='body2' > ullstein</Typography>
                            <Typography color='secondary'variant='body2' > English</Typography>
                            <Typography color='secondary'variant='body2' > Paperback</Typography>

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
  
  BokkDetailsMain.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRoot(withStyles(styles)(BokkDetailsMain));
  