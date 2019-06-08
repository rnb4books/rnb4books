import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete } from '../../layout/colors';
import BookDetailsMain from './BookDetailsMain';
import BookDetailsBar from './BookDetailsBar';
import BookDescriptionCard from './BookDescriptionCard';
import OpinionsCard from './OpinionsCard';
import {books} from '../../../static/mockData';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 3,
    backgroundColor: mainPallete.smokeyBlackDark,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  grow: {
    flexGrow: 1,
  }, 
  details: {
    display: 'flex', 
    flex: 1,
    flexDirection: 'row'
  }, 
  content: {
    marginLeft: '8%', 
    marginRight: '8%'
  }, 
  mainInfo: {
    display: 'flex', 
    flex: 2,
  }, 
  picture: {
    margin: '10px',
    backgroundColor: mainPallete.eerieBlack, 
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
},
});

const getBookById = (id) => {
  return books.find(b => b.id == id)
}

class BookDetails extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    const bookDetails = getBookById(this.props.match.params.id);

    return (
      <div className={classes.root}>
         <Grid
          className={classes.content}
          container
          direction="column"
          justify="top"
          alignItems="left"
        >        
          <BookDetailsMain
              className={classes.mainInfo}
              rateDisabled={bookDetails.rateDisabled}
              bookCoverImage={bookDetails.bookCoverImage}
              info={bookDetails.info}          
          />

          <BookDescriptionCard/>
          <BookDetailsBar className={classes.details}
            book={bookDetails}
          ></BookDetailsBar>

          <OpinionsCard/>
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
        bookCoverType: 'Paperback', 
        description: ''
  }
}
}

export default withRoot(withStyles(styles)(BookDetails));
