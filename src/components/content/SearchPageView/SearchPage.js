import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Search from './SearchBar'
import SearchResults from './SearchResults'
import {mainPallete } from '../../layout/colors';
import {books} from '../../../static/mockData';
import Typography from '@material-ui/core/Typography';
import { geolocated } from "react-geolocated";


const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 20,
    backgroundColor: mainPallete.smokeyBlackDark,
    display: 'flex', 
    flexDirection: 'column', 
    flex: 1, 
    minHeight: '-webkit-fill-available'
  },
  grow: {
    flexGrow: 1,
  }, 
  welcomeMsg: {
    margin: '10px', 
    padding: '10px'
  }
});


class SearchPage extends React.Component {
  state = {
    searchResults: [],
    searchPhrase: '', 
    filters: []
  };

  search = (value, genre, publisher, condition) => {
    let searchRes = [];
    let filters = [genre, publisher, condition];
    if(/\S/.test(value))
    {
      const searchPhrase = value.toLowerCase();
      const b = books;
      searchRes =  books.filter( book =>     {
          return (book.info.title.toLowerCase().includes(searchPhrase) ||
              book.info.author.toLowerCase().includes(searchPhrase)
          ) && (
          //    process filters
              (!genre || genre.includes(book.info.genre))
              &&
              (!publisher || publisher.includes(book.info.publisher))
              &&
              (!condition || condition.includes(book.info.condition))
          )
      }

        );
    }

      this.setState({
        searchResults: searchRes,
        searchPhrase: value, 
        filters: filters
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography 
          className={classes.welcomeMsg} 
          variant="h5" component="h5">
             Welcome to RNB4BOOKS - site where you can rent books from people near youc location!
        </Typography>
        <Search
          search={this.search}
          />
        <SearchResults
          searchResults={this.state.searchResults}
          searchPhrase={this.state.searchPhrase}
          filters={this.state.filters}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(SearchPage)));

