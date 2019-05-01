import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { SearchPage } from './components/content/SearchPageView'
import { AddOfferPage } from './components/content/AddBookOfferView'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import  Header  from './components/layout/Header'



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

class App extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component = {SearchPage}/>
        <Route exact path="/search" component = {SearchPage}/>
        <Route exact path="/add-offer" component = {AddOfferPage}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));