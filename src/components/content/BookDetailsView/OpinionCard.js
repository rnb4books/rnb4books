import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginLeft: '5px',
      marginBottom: '15px'
    },
    grow: {
      flexGrow: 1,
    },
    card: {
        backgroundColor: mainPallete.eerieBlack,
    },
    ratingContent: {
        display: 'flex',
        paddingRight: '250px',
        alignItems: 'left',
    },
    stars: {
        paddingRight: '20px'
    }, 
    comment: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        alignItems: 'flex-end', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',        

    },
    rating: {
        display: 'flex', 
        justifyContent: 'top', 
        flexDirection: 'column'
    }

    
  });
  
  class OpinionCard extends React.Component {
    state = {
    };

    createStars = (number) => {
      const stars = [];
      for(let i = 0; i < number; i++)
      {
        stars.push(<i class="fas fa-star" color='primary'/>);
      }
      for(let i = 10 - number; i >= 0; i--)
      {
        stars.push(<i class="far fa-star" color='primary'/>);
      }
      return stars;
    }
  
    render() {
      const { classes, rating, comment, user } = this.props;
      const stars = this.createStars(rating);
      return (
        <div className={classes.root}>
            <Card className={classes.card}>
                    <CardContent>
                    <div className={classes.comment}>
                  
                        <div className={classes.rating}>
                                <div className={classes.ratingContent}>
                                <div className={classes.stars}>
                                  {stars}
                                </div>
                                <Typography component="h6" variant="h6">
                                    {rating}
                                </Typography>
                                </div>
                                <Typography>
                                  {comment}
                                </Typography>
                            </div>
                            <div className={classes.date}>
                        <Typography >06.03.2018</Typography>   
                        <Link variant='body2' underline='always'>{user}</Link>                   
                    </div>
                            </div>
                    </CardContent>
            </Card>
        </div>
      );
    }
  }
  
  OpinionCard.propTypes = {
    rating: PropTypes.number, 
    comment: PropTypes.string,
    user: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };

  OpinionCard.defaultProps = {
    rating: 0,
    comment: '',
    user: '',
    classes: {}, 
  }
  
  export default withRoot(withStyles(styles)(OpinionCard));
  