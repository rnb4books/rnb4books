import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Search from './SearchBar'
import BookResultCard from './Card'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  results: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  }
});

class SearchResults extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>
        Search Results for '1984'
        </h1>
        <div className={classes.results}>
          <BookResultCard/>
          <BookResultCard/>
          <BookResultCard/>
          <BookResultCard/>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SearchResults));
