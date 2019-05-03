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
    alignContent: "flex-start",
    flexWrap: "wrap",
        '&::after': {
          content: "",
          flex: "auto",
        }

  },

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
          <BookResultCard
            rating='4.8'
            logo='1984-4.jpg'
            title='1984'
            subtitle='George Orwell'
            address='Tokarskiego 2, Krakow'
          />
          <BookResultCard 
            rating='4.4'
            logo='1984-1.jpg'
            title='1984'
            subtitle='George Orwell'
            address='Basztowa 14, Krakow'
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
        </div>
        <h1>
          Dystopian reccomendations from your friends
        </h1>
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
