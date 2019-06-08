import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Search from './SearchBar'
import SearchResults from './SearchResults'
import {mainPallete } from '../../layout/colors';
import {books} from '../../../static/mockData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 20,
    backgroundColor: mainPallete.smokeyBlackDark,
  },
  grow: {
    flexGrow: 1,
  }
});


class SearchPage extends React.Component {
  state = {
    searchResults: [], 
    searchPhrase: ''
  };

  search = (value) => {
    let searchRes = [];
    if(/\S/.test(value))
    {
      const searchPhrase = value.toLowerCase();
      const b = books;
      searchRes =  books.filter( book =>     {
        return  book.info.title.toLowerCase().includes(searchPhrase) || 
        book.info.author.toLowerCase().includes(searchPhrase) 
      }
          
        );
    }

      this.setState({
        searchResults: searchRes,
        searchPhrase: value
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Search
          search={this.search}         
          />
        <SearchResults
          searchResults={this.state.searchResults}
          searchPhrase={this.state.searchPhrase}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SearchPage));
