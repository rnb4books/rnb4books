import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { SearchPage } from './components/content/SearchPageView'
import { AddOfferPage } from './components/content/AddBookOfferView'
import { BookDetails } from './components/content/BookDetailsView'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import  Header  from './components/layout/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

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
    <MuiThemeProvider>
      <BrowserRouter>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
      <Header/>
      <Switch>
        <Route exact path="/" component = {SearchPage}/>
        <Route exact path="/search" component = {SearchPage}/>
        <Route exact path="/add-offer" component = {AddOfferPage}/>
        <Route exact path="/book-details" component = {BookDetails}/>
      </Switch>
    </BrowserRouter>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));