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
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import  Close from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Rating from 'material-ui-rating'
import Fab from '@material-ui/core/Fab';


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
        flexDirection: 'row',
    },
    rentButtonSection: {
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
        color: mainPallete.vividMalachite
    }, 
    crossIcon: {
        fontSize: '90px', 
        color: 'red'
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
        flexDirection: 'column',
        flex: 3,
        backgroundColor: mainPallete.eerieBlack, 
        paddingLeft: '15px',
        paddingBottom: theme.spacing.unit  *3

    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        flex: 1, 
        padding: theme.spacing.unit * 2, 
    },
    cardRatingContent: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        flex: 1, 
        padding: theme.spacing.unit * 2, 
        backgroundColor: mainPallete.richBlack
    },
    labels: {
        paddingRight: '25%', 
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-evenly"

    }, 
    values: {
        display: 'flex',
        flex: 2,
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
        marginBottom: '10px',
    }, 
    checkSection: {
        marginRight: '8%', 
        marginTop: '5px'
    }, 
    starIcon : {
        marginRight: '15px'
      },
      cardRentContent:  {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        flex: 1, 
          backgroundColor: mainPallete.richBlack, 
        margin: '25px', 

      },
      textField: {
        width: '30%',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2
    
      },

      label: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '200px',
      },
      form: {
        paddingTop: theme.spacing.unit *5,
        paddingLeft: theme.spacing.unit,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around',
        flex: 1,       
      }, 

      radios: {
          marginLeft: theme.spacing.unit ,
          flexDirection: 'row', 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '35%',
          marginBottom: theme.spacing.unit
      }, 
      msgArea: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '88%',
        marginBottom: '2%', 
      }, 
      rentFormButtons: {
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
            paddingRight: '5%', 

      }, 
      checkIconNotif: {
          color: 'white', 
          margin: '10px'
      }, 
      notif: {
          marginTop: '2%', 
          display: 'flex', 

      }, 
      notifContent: {
        backgroundColor: mainPallete.vividMalachite, 
        display: 'flex', 
        alignItems: 'flex-start',
        flexDirection: 'row',


      }, 
      notifSpan: {
        display: 'flex', 
        alignItems: 'center',
        flexDirection: 'row',

      }, 
      rateCommentArea: {
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
      }, 
      submitRateButton: {
          width: '30%',
          alignSelf: 'flex-end', 
          marginRight: '8%',
            marginTop: '5%'
      },
      rateArea: {
        display: 'flex', 
        flexDirection: 'row', 
        flex: 1, 
      }, 
      rateValue: {
          paddingLeft: '2%',
      },

      closeRating: {
          marginRight: '3%', 

      }, 
      closeRenting: {
        marginRight: '3%', 
      
      },
      submitRentButton: {
          width: '150px',

      }, 
      bookmarkIcon: {
          fontSize: 80, 
          color: mainPallete.whiteSmokeLight, 
          padding: '0px', 
          margin: '0px', 
          alignSelf:'flex-start', 
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',

    }
     
  });
  
  class BookDetailsMain extends React.Component {
      constructor(props)
      {
          super(props);
            this.state = {
                rentAreaOpened: false, 
                notifOpened: false,
                rateAreaOpened: false,
                rating: 0,
                rentForm: {
                    date: Date.now(),
                    exchange: '',
                    rentTime: '',
                    message: ''
                }, 
                alertMsg: ''
            };

            this.onRentClick = this.onRentClick.bind(this);
            this.onRateClick = this.onRateClick.bind(this);
            this.onCloseClick = this.onCloseClick.bind(this);
            this.onSendRequestClick = this.onSendRequestClick.bind(this);
            this.handleNotifClose = this.handleNotifClose.bind(this);
            this.onRatingChanged = this.onRatingChanged.bind(this);
            this.onSubmitRating = this.onSubmitRating.bind(this);
      }

   
      onSubmitRating()
      {
          this.setState({
              rateAreaOpened: false, 
              alertMsg: 'Rating succesfully submitted!', 
              notifOpened: true

          })
      }

    onRentClick()
    {
        this.setState({
            rentAreaOpened: true, 
        })
    }

    onCloseClick()
    {
        this.setState({
            rentAreaOpened: false
        })
    }

    onSendRequestClick() 
    {
        this.setState({
            notifOpened: true, 
            rentAreaOpened: false, 
            alertMsg: 'Rent request succesfully submitted!'
        });
    }

    handleNotifClose()
    {
        this.setState({
            notifOpened: false, 
        });
    }

    onRatingChanged(value)
    {
        this.setState({
            rating:value
        });
    }

    onRateClick()
    {
        this.setState({
            rateAreaOpened: true
        })
    }

  
    render() {
      const logo = require('../../../static/' + this.props.bookCoverImage);
      const { classes, info } = this.props;
      return (
        <div className={classes.root}>
        <Snackbar
            className={classes.notif}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.notifOpened}
          autoHideDuration={6000}
          onClose={this.handleNotifClose}
        >
          <SnackbarContent
          className={classes.notifContent}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.notifSpan}>
          <CheckIcon className={classes.checkIconNotif}/>
          <Typography > {this.state.alertMsg}</Typography>
        </span>
      }
      action={[
          <Close  onClick={this.handleNotifClose}/>
      ]}
    />
        </Snackbar>

        <Card className={classes.card}>   
        {this.state.rentAreaOpened  ? 
<div style={{        paddingTop: '20px', 
        paddingBottom: '150px'
}}>
        <CardContent className={classes.cardRentContent}>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="top"
        >
        <form className={classes.form} noValidate>
        
        <FormControl>

        <FormLabel className={classes.label}>Preffered exchange type</FormLabel>
        <RadioGroup className={classes.radios}>
        <FormControlLabel 
            value="droppOff" 
            control={<Radio />} 
            label="Drop Off" />
        <FormControlLabel 
            value="meeting" 
            control={<Radio />} 
            label="Meeting" />

        </RadioGroup>
        <TextField
            type= 'datetime-local'
          id="standard-name"
          label="Prefered exchange date"
          className={classes.textField}
          value={this.state.rentForm.date}
          margin="normal"
        />
         <TextField
          id="standard-fullw-width"
          type= 'text'
          label="Prefered rent time"
          className={classes.textField}
          value={this.state.rentForm.rentTime}
          margin="normal"
          placeholder="e.g. 1 month"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="standard-with-placeholder"
          multiline={true}
          label="Messege to the owner:"
          className={classes.msgArea}
          value={this.state.rentForm.message}
          margin="normal"
          rows={5}
          placeholder="Type in the message to the owner"
          InputLabelProps={{
            shrink: true,
          }}
        />
       
        </FormControl>
        </form>
        <div className={classes.rentFormButtons}>
            <Close color="secondary" onClick={this.onCloseClick} className={classes.closeRenting}/>
            <Button onClick={this.onSendRequestClick} className={classes.submitRentButton}>SEND RENT REQUEST </Button>
            </div>
        </Grid>
            </CardContent>
            </div>
        :

                <CardContent className={this.state.rateAreaOpened ? classes.cardRatingContent : classes.cardContent}>
                    <div className={classes.pictureSection}>
                        <div className={classes.picture}>
                            <CardMedia
                                className={classes.media}
                                image={logo}
                                title="Book cover"
                            >
                            <div>                       
                            <BookmarkIcon className={classes.bookmarkIcon}>
                            <Typography >
                                {this.state.rating}
                             </Typography>
                            </BookmarkIcon>
                            </div>
                            </CardMedia>

                        </div>
                        {!this.state.rateAreaOpened &&
                        <div className={classes.rentButtonSection}>
                            <Button className={classes.rentButton} onClick={this.onRentClick}>RENT</Button>
                            <Button disabled={this.props.rateDisabled} className={classes.rentButton} onClick={this.onRateClick}>RATE</Button>

                        </div>
                        }
                    </div>
                    <div className={classes.bookInfo}>
                        <div className={classes.info}>
                                <div className={classes.infoHeader}>
                                    <Typography  component="h1" variant="h1">
                                        {info.title}            
                                    </Typography>
                                    <Typography  variant="h6" >
                                        {info.author}
                                    </Typography>
                                </div>
                                { this.state.rateAreaOpened ?
                                    <Tooltip title={'Close'} className={classes.closeRating}>

                                    <Close color="secondary" onClick={this.onSubmitRating}/>
                                    </Tooltip>
                                    :
                                    
                                    <Tooltip title={info.available ? 'Available' : 'Not available' } className={classes.checkSection}>

                                    { info.available  ? <CheckIcon className={classes.checkIcon}/> : <Close className={classes.crossIcon}/>}
                                </Tooltip>}
                        </div>
                        <div className={classes.rating}>
                            {this.state.rateAreaOpened ? 
                            <div className={classes.rateArea}>
                                <Rating
                                value={this.state.rating}
                                max={10}
                                iconFilled={<StarIcon color='primary'/>}
                                iconHovered={<StarIcon color='primary'/>}
                                onChange={this.onRatingChanged}
                                />
                                <Typography className={classes.rateValue} component="h4" variant="h4">
                                {this.state.rating}
                                </Typography>
                                </div>
                                :
                                <div className={classes.ratingContent}>
                                <StarIcon  color='primary' className={classes.starIcon}/>
                                <Typography component="h4" variant="h4">
                                    {info.rating}
                                </Typography>
                                </div>
                            }       
                        </div>
                        {this.state.rateAreaOpened ? 
                        <div className={classes.rateCommentArea}>
                            <TextField
                                id="standard-with-placeholder"
                                multiline={true}
                                label="Comment:"
                                className={classes.msgArea}
                                value={this.state.rentForm.message}
                                onChange={() => {}}
                                margin="normal"
                                rows={8}
                                placeholder="Type in the comment about this rent offer"
                                InputLabelProps={{
                                    shrink: true,
                                }}/>
                            <Button className={classes.submitRateButton} onClick={this.onSubmitRating}>SUBMIT RATING</Button>

                        </div>
                       
                       
                        :
                        <div className={classes.infoPanel}>
                        <Grid
                            container
                            direction="row"
                            >
                            <div className={classes.labels}>
                            <Typography variant='h6'> Address:</Typography>
                            <Typography variant='h6'> Renter:</Typography>
                            <Typography variant='h6'> Availability:</Typography>
                            <Typography variant='h6'> Condition:</Typography>
                            <Typography variant='h6'> Max rent time:</Typography>
                            <Typography variant='h6'> Publisher:</Typography>
                            <Typography variant='h6'> Language:</Typography>
                            <Typography variant='h6'> Book cover type:</Typography>

                            </div>
                            <div className={classes.values}>
                            <Typography variant='body2' > {info.address}</Typography>
                            <Link variant='body2' underline='always'> {info.renter}</Link>
                            <Typography variant='body2' > {info.availability}</Typography>
                            <Typography variant='body2' > {info.condition}</Typography>
                            <Typography variant='body2' > {info.maxRentTime}</Typography>
                            <Typography variant='body2' > {info.publisher}</Typography>
                            <Typography variant='body2' > {info.language}</Typography>
                            <Typography variant='body2' > {info.bookCoverType}</Typography>
                            </div>
                        </Grid>
                        </div>}
                        </div>
                    </CardContent>}
            </Card>
        </div>
      );
    }
  }
  
  BookDetailsMain.propTypes = {
    classes: PropTypes.object.isRequired,
    rateDisabled: PropTypes.bool, 
    info: PropTypes.object
  };

  BookDetailsMain.defaultProps = {
      rateDisabled: true, 
      bookCoverImage: '',
      info: {
          title: '', 
          author: '',
          rating: '',
          address: '', 
          renter: '', 
          availability: '', 
          available: true, 
          condition: '', 
          maxRentTime: '', 
          publisher: '', 
          language: '', 
          bookCoverType: ''
      }
  }
  
  
  export default withRoot(withStyles(styles)(BookDetailsMain));
  