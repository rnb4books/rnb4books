import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import {mainPallete} from './components/layout/colors';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
      primary: {
        main: mainPallete.blue,
        contrastText: mainPallete.whiteSmoke,
        textPrimary: mainPallete.whiteSmoke, 
        light: mainPallete.blueBerry
        // light: purple[300],
        // main: purple[500],
        // dark: purple[700],
    },
    secondary: {
      main: mainPallete.whiteSmoke,
      contrastText: mainPallete.whiteSmoke,
     
    },
    background: {
      default: mainPallete.whiteSmoke
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [ 'Rajdhani', 'sans-serif'],
    textPrimary: mainPallete.whiteSmoke
  },
  overrides: {
    MuiButton: {
      root: {
        color: mainPallete.whiteSmoke,
        backgroundColor: mainPallete.blue,
        '&:hover': {
          backgroundColor: mainPallete.onyx
        }
      }, 
      textSecondary: {
        color: mainPallete.whiteSmoke,
        backgroundColor: mainPallete.richBlack, 
        '&:hover': {
          backgroundColor: mainPallete.onyx
        }
      }
    }, 
      MuiLink: {
        root: {
          color: mainPallete.whiteSmoke,
        }, 
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
