import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import SearchBar from 'material-ui-search-bar'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Filters from './Filters'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    marginRight: "10px",
  }
});

class Search extends React.Component {
  state = {
    isOpened: false,
  };

  handleClick = () => {
    this.setState({isOpened : !this.state.isOpened})
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.search}>
       <IconButton onClick={this.handleClick} className={classes.icon} color="inherit" aria-label="Menu">
          <HomeIcon />
        </IconButton>
         <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            width: 800

          }}
         />
         </div>
          {this.state.isOpened && (
            <Filters/>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Search));
