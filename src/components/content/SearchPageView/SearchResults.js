import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import BookResultCard from './Card'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {books} from  '../../../static/mockData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex', 
    flexDirection: 'column',
    flex: 1
  },
  grow: {
    flexGrow: 1,
  },
  results: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    marginLeft: '40px',
    marginRight: "40px",
    flexWrap: "wrap",
        '&::after': {
          content: "",
          flex: "auto",
        }

  },
  // frame : {
  //   "marginLeft": "20px",
  //   "marginRight": "20px",
  // },
  title : {
    display: "flex",
    justifyContent: "center"
  },
  h1: {
    color: "white"
  },
  typo: {
    paddingTop: '10px',
    paddingBottom: '10px',
    marginLeft: '10px',
    marginRight: '10px',
  }

});

class SearchResults extends React.Component {
  state = {
  };

  render() {
    const { classes, searchResults, searchPhrase, filters } = this.props;
    const filtersString = filters.join(' ');
    const filterText = /\S/.test(filtersString) ? ' with filters: ' + filters.join(' ') : '';
    return (
      <div className={classes.root}>
        {
          searchResults && searchResults.length > 0 && 
          <div className={classes.title}>
            <Typography className={classes.typo} component="h5" variant="h5">
                {`Search Results for ${searchPhrase}`} 
            </Typography>
          <Button className={classes.button}>Map view</Button>
          </div>
        }
      
       

            {searchResults && searchResults.length > 0 ? 
            <div className={classes.results}>
            {
              searchResults.map(book => 
              <BookResultCard
                rating={book.info.rating}
                logo={book.bookCoverImage}
                title={book.info.title}
                subtitle={book.info.author}
                address={book.info.address}
                id={book.id}
            />
            )}
            </div>
             : 
                (searchPhrase && searchPhrase.length > 0 && 
              <Typography className={classes.typo} component="h5" variant="h5">
                {`No results for '${searchPhrase}'` + filterText}
              </Typography>)    
          }
               
        <Typography className={classes.typo} component="h5" variant="h5">
          Top rent offers this week:
        </Typography>
        <div className={classes.results}>
            {books.map(book => 
            {
              let ratingSum = 0;
              let ratingCount = 0;
              if(book.opinions )
                book.opinions.forEach( opinion => {
                  ratingSum += opinion.rating; 
                  ratingCount++;
                });
              let rating = ratingCount !== 0 ?  ratingSum / ratingCount : 0;
                return <BookResultCard
                rating={rating}
                logo={book.bookCoverImage}
                title={book.info.title}
                subtitle={book.info.author}
                address={book.info.address}
                id={book.id}
            />
            }
               
              )
            }
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  searchResults: PropTypes.array, 
  searchPhrase: PropTypes.string, 
  filters: PropTypes.array
};

export default withRoot(withStyles(styles)(SearchResults));
