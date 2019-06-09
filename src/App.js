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
import { mainPallete } from './components/layout/colors';
// import { library } from '@fontawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faStroopwafel } from '@fontawesome/free-solid-svg-icons'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// library.add(faStroopwafel)

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    backgroundColor: mainPallete.smokeyBlackDark
  },
  appbar: {
    padding: '5px',
    top: 'auto',
    bottom: 0,
    backgroundColor: mainPallete.richBlack
  },
  typo: {
    color: mainPallete.whiteSmokeLight, 
    justifyContent: 'center', 
    display: 'flex'
  },
  links: {
    display: 'flex', 
    paddingLeft: '5px',
    paddingRight: '5px'

  },
  grow: {
    flexGrow: 1,
  }, 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '12px'
    },
    '*::-webkit-scrollbar-track' : 
    {
      backgroundColor: mainPallete.smokeyBlack 
    },
'*::-webkit-scrollbar-thumb':
{
    backgroundColor: '#454546',
    borderRadius: '5px'
}
  }
});

class App extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
    <MuiThemeProvider className={classes.root}>
      <BrowserRouter>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
      <Header/>
      <Switch>
        <Route exact path="/" component = {SearchPage}/>
        <Route exact path="/search" component = {SearchPage}/>
        <Route exact path="/add-offer" component = {AddOfferPage}/>
        <Route exact path="/book-details/:id" component = {BookDetails}/>
      </Switch>
      <AppBar className={classes.appbar}>

      <div>
        <Typography variant="body2" className={classes.typo}>
          App icon made by 
          <Link className={classes.links} href="https://www.freepik.com/?__hstc=57440181.2fb78b390376de33fad97e07ad108db7.1559064923555.1559064923555.1560079983740.2&__hssc=57440181.4.1560079983740&__hsfp=2991554285" title="Freepik">
            Freepik </Link> from 
            <Link className={classes.links}
              href="https://www.flaticon.com/"
              title="Flaticon">www.flaticon.com</Link> 
           is licensed by <Link className={classes.links} href="http://creativecommons.org/licenses/by/3.0/" 			    
        title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</Link>
        </Typography>
        </div>
      </AppBar>
    </BrowserRouter>
    </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));