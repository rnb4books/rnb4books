import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/CheckCircleOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import  Close from '@material-ui/icons/Close';
import Notification from '../../layout/Notification';
import BookCover from '../../layout/BookCover';
import RentForm from './RentForm';
import RateArea from './RateArea';
import model from './bookRentOfferModel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      display: 'flex',
      flex: 1,
      backgroundColor: 'inherit',
      marginBottom: '1%',
    },
    card: {
        display: 'flex',
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: mainPallete.licorice,
    },
    coverSection: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    rentButton: {
        margin: '10px',
    }, 
    header: {
        display: 'flex', 
        flex: 1,
    },
    infoHeader: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        margin: '10px', 
        justifyContent: 'flex-end'
    },
    checkIcon: {
        fontSize: '90px', 
        color: mainPallete.vividMalachite
    }, 
    crossIcon: {
        fontSize: '90px', 
        color: 'red'
    },
    infoPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        backgroundColor: mainPallete.lightGrey, 
        margin: '1%', 
        padding: '1%'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        flex: 1, 
    },
    availiabilitySection: {
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginRight: '1%'
    }, 
    rateInfoArea: {
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: mainPallete.eerieBlack,
    }, 
    infoArea: {
        flex: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        margin: '0.5%', 
        paddingBottom: '5%'
    }, 
    bookCover: {
        display: 'flex', 
        flex: 1,
        margin: '0.5%', 
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

      createInfoPanel = () => {
        const infoLabels = [];
        const infoValues = [];
        {model.forEach(info => {
            infoLabels.push(<Typography variant='h6'>{info.displayValue}</Typography>);
            if(info.value === 'renter')
                infoValues.push(<Link variant='body2' underline='always'> {this.props.info.renter}</Link>);
            else
                infoValues.push(<Typography variant='body2'>{this.props.info[info.value]}</Typography>);
        })}
        return {infoLabels, infoValues};
      }

   
      onSubmitRating()
      {
          this.setState({
              rateAreaOpened: false, 
              alertMsg: 'Rating succesfully submitted!', 
              notifOpened: true,
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

    onRentFormDataChange = (field, value) =>
    {
        this.setState({
            rentForm: {
                ...this.state.rentForm,
                [field]: value
            }
        });
    }

  
    render() {
      const logo = require('../../../static/' + this.props.bookCoverImage);
      const { classes, info } = this.props;
      const {infoLabels, infoValues}  = this.createInfoPanel();
      return (
        <div className={classes.root}>
            <Notification
                message={this.state.alertMsg}
                isOpen={this.state.notifOpened}
                handleClose={this.handleNotifClose}
            />
            <Card className={classes.card}>   
                {
                    this.state.rentAreaOpened  ?  
                    <RentForm
                        rentInfo={this.state.rentForm}
                        onDataValueChange={this.onRentFormDataChange}
                        onClose={this.onCloseClick}
                        onSend={this.onSendRequestClick}
                    />
                    :
                    <CardContent className={classes.cardContent}>
                        <div className={classes.coverSection}>
                        <BookCover
                            className={classes.bookCover}
                            image={logo}
                        />
                        <Button 
                            className={classes.rentButton}
                            onClick={this.onRentClick}
                        >
                            Rent
                        </Button>
                        </div>
                        <div className={classes.infoArea}>
                            <div className={classes.header}>
                                {/* <div className={classes.info}> */}
                                <div className={classes.infoHeader}>
                                    <Typography  
                                        component="h1" 
                                        variant="h1"
                                    >
                                        {info.title}            
                                    </Typography>
                                    <Typography  variant="h6" >
                                        {info.author}
                                    </Typography>
                                </div>
                                <div className={classes.availiabilitySection}>
                                    <Tooltip 
                                        title={info.available ? 'Available' : 'Not available'} 
                                        className={classes.checkSection}>
                                        { info.available  ? 
                                            <CheckIcon className={classes.checkIcon}/> 
                                                : 
                                                <Close className={classes.crossIcon}/>}
                                    </Tooltip>
                                    <Typography 
                                        component="h6" 
                                        variant="h6"
                                    >
                                        {info.available ? 'Available' : 'Not available'}
                                    </Typography>
                                </div>
                            </div> 
                            <div className={classes.rateInfoArea}>       
                                <RateArea
                                    initialRating={this.props.userRating}
                                    info={info}
                                    onSubmitRating= {this.onSubmitRating}
                                    ratingSum={this.props.ratingSum}
                                    ratingCount={this.props.ratingCount}
                                />
                                <div className={classes.infoPanel}>
                                    <Grid
                                        container
                                        direction="row"
                                        >
                                        <div className={classes.labels}>
                                            {infoLabels}
                                        </div>
                                        <div className={classes.values}>
                                            {infoValues}
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                        </div>      
                    </CardContent>
                }
            </Card>
        </div>
      );
    }
  }
  
  BookDetailsMain.propTypes = {
    classes: PropTypes.object.isRequired,
    ratingCount: PropTypes.number, 
    ratingSum: PropTypes.number, 
    rateDisabled: PropTypes.bool, 
    info: PropTypes.object,
    userRating: PropTypes.object, 
  };

  BookDetailsMain.defaultProps = {
      rateDisabled: true, 
      bookCoverImage: '',
      userRating: {
          rating: 0, 
          comment: ''
      },
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
      }, 
      ratingCount: 0, 
      ratingSum: 0,
  }
  
  export default withRoot(withStyles(styles)(BookDetailsMain));
  