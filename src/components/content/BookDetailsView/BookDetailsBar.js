import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import Link from '@material-ui/core/Link';
import BookCover from '../../layout/BookCover';


const styles = theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'center', 
      marginTop: '20px',

    },
    card: {
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: mainPallete.licorice,
      paddingRight: '20px',
      paddingLeft: '20px'

    }, 
    content: {
      display: 'flex', 
      flex: 1,
      flexDirection: 'row', 
      margin: '1%'

    }, 
    rating: {
      marginBottom: '10px',
    },
    descRate: {
      flex: 4, 
      display: 'flex',
      flexDirection: 'column',
      margin: '1%'

    },
    bookLink : {
      flex: 1,
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center'
    },
    ratingContent: {
      flex:1,
      display: 'flex',
      paddingRight: '250px',
      alignItems: 'flex-start',
      backgroundColor: mainPallete.eerieBlack, 
  },
  description: {
    backgroundColor: mainPallete.eerieBlack, 
    padding: '10px'
  }, 
  starIcon : {
    margin: '10px'
  }
  });
  
  class BokkDetailsBar extends React.Component {
    state = {
    };
  
    render() {
      const { classes, book } = this.props;
      const logo = require('../../../static/' + this.props.book.bookCoverImage);
      return (
        <div className={classes.root}>
        <Card className={classes.card}>
            <CardHeader
                title="Book details:"
                titleTypographyProps={{variant:'h5'}}
                />
                <CardContent className={classes.content}>
                  <div>
                      <BookCover
                        image={logo}
                        showBookmark={false}
                      />
                      <div className={classes.bookLink}>
                        <Link underline='always' >See full book details</Link>
                    </div>
                  </div>
                  <div className={classes.descRate}>
                    <div className={classes.rating}>
                    <Typography component="h6" variant="h6">
                            Rating of this book:
                        </Typography>
                      <div className={classes.ratingContent}>
                        <StarIcon   color='primary' className={classes.starIcon}/>
                        <Typography component="h4" variant="h4">
                            {book.info.rating}
                        </Typography>
                      </div>
                    </div >
                    <Typography className={classes.description}>
                      {book.info.description}
                    </Typography>
                  </div>             
                </CardContent>
        </Card>
    </div>
      );
    }
  }
  
  BokkDetailsBar.propTypes = {
    classes: PropTypes.object.isRequired,
    book: PropTypes.object
  };
  
  export default withRoot(withStyles(styles)(BokkDetailsBar));
  

