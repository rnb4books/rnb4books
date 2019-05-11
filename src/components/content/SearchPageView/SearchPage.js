import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Search from './SearchBar'
import SearchResults from './SearchResults'
import {mainPallete } from '../../layout/colors';


const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 20,
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: mainPallete.smokeyBlackDark,
  },
  grow: {
    flexGrow: 1,
  }
});

class SearchPage extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Search/>
        <SearchResults/>
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SearchPage));
