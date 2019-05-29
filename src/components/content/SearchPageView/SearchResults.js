import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Search from './SearchBar'
import BookResultCard from './Card'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  results: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: "30px",
    marginRight: "30px",
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
    marginRight: '10px'
  }

});

class SearchResults extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
        <Typography className={classes.typo} component="h5" variant="h5">
          Search Results for '1984'
        </Typography>
        <Button className={classes.button}>Map view</Button>
        </div>

        <div className={classes.frame}>
        <div className={classes.results}>
          <BookResultCard
            rating='4.8'
            logo='1984-4.jpg'
            title='1984'
            subtitle='George Orwell'
            address='Tokarskiego 2, Krakow'
            id='example1'
          />
          <BookResultCard 
            rating='4.4'
            logo='1984-1.jpg'
            title='1984'
            subtitle='George Orwell'
            address='Basztowa 14, Krakow'
            id='example2'
          />
          <BookResultCard
           rating='4.2'
           logo='1984-3.jpg'
           title='1984'
           subtitle='George Orwell'
           address='Budryka 11, Krakow'
           />
          <BookResultCard
           rating='3.2'
           logo='1984-2.jpg'
           title='1984'
           subtitle='George Orwell'
           address='Nowa 3, Krakow'
          />
                    <BookResultCard
           rating='3.2'
           logo='1984-2.jpg'
           title='1984'
           subtitle='George Orwell'
           address='Nowa 3, Krakow'
          />
         </div>
         </div>
        <Typography className={classes.typo} component="h5" variant="h5">
          Dystopian recommendations from your friends
        </Typography>
        <div className={classes.results}>
          <BookResultCard 
            rating='3.3'
            logo='1984-4.jpg'
            title='1984'
            subtitle='George Orwell'
            address='Basztowa 14, Krakow'
          />
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SearchResults));
