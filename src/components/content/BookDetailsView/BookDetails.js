import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete } from '../../layout/colors';
import BookDetailsMain from './BookDetailsMain';
import BookDetailsBar from './BookDetailsBar';
import BookDescriptionCard from './BookDescriptionCard';
import OpinionsCard from './OpinionsCard';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 3,
    marginRight: '8%',
    marginLeft: '8%',
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
    marginRight: '20px',
    marginLeft: '20px'
  }, 
  details: {
    display: 'flex', 
    flex: 1,
  }
});


const bookData = {
  example1: {
    rateDisabled: true,
    bookCoverImage: '1984-4.jpg',
    info: {
        title: '1984', 
        author: 'George Orwell',
        rating: '6.5',
        address: 'Basztowa 14, Kraków', 
        renter: 'Singapurr', 
        availability: '20.06.2019', 
        available: false, 
        condition: 'Good', 
        maxRentTime: '3 months', 
        publisher: 'Rebis', 
        language: 'Polish', 
        bookCoverType: 'Paperback'

  }
  }, 
  example2: {
    rateDisabled: false,
    bookCoverImage: '1984-1.jpg',
    info: {
        title: '1984', 
        author: 'George Orwell',
        rating: '8.6',
        address: 'Tokarskiego 2, Kraków', 
        renter: 'Madeline Kowalsky', 
        availability: 'Available now', 
        available: true, 
        condition: 'Excellent', 
        maxRentTime: '1 month', 
        publisher: 'Ullstein', 
        language: 'English', 
        bookCoverType: 'Paperback'
  }}, 
};

class BookDetails extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    const bookDetails = this.props.match.params.id === 'example1' ? bookData.example1 : bookData.example2;
    return (
      <div className={classes.root}>
      <Grid
          container
          direction="row"
          justify="left"
          alignItems="top"
        >
        <div className={classes.main}>
         <Grid
          container
          direction="column"
          justify="top"
          alignItems="left"
        >        
        <BookDetailsMain
             rateDisabled={bookDetails.rateDisabled}
             bookCoverImage={bookDetails.bookCoverImage}
             info={bookDetails.info}          
         />
        <BookDescriptionCard/>
        <OpinionsCard/>
        </Grid>
        </div>

        <BookDetailsBar className={classes.details}></BookDetailsBar>

      </Grid>
      </div>
    );
  }
}

BookDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  bookDetails: PropTypes.object
};

BookDetails.defaultProps = {
  bookDetails: {
    rateDisabled: true,
    bookCoverImage: '1984-1.jpg',
    info: {
        title: '1984', 
        author: 'George Orwell',
        rating: '8.6',
        address: 'Tokarskiego 2, Kraków', 
        renter: 'Madeline Kowalsky', 
        availability: 'Available now', 
        available: true, 
        condition: 'Excellent', 
        maxRentTime: '1 month', 
        publisher: 'Ullstein', 
        language: 'English', 
        bookCoverType: 'Paperback'
  }
}
}

export default withRoot(withStyles(styles)(BookDetails));
