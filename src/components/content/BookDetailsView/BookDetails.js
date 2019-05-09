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

class BookDetails extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

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
        <BookDetailsMain ></BookDetailsMain>
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
};

export default withRoot(withStyles(styles)(BookDetails));
