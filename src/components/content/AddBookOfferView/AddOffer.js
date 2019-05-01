import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';



const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  grow: {
    flexGrow: 1,
  }
});

class AddOfferPage extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Hello Add book offer
      </div>
    );
  }
}

AddOfferPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(AddOfferPage));
