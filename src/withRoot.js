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
        main: mainPallete.whiteSmoke,
        contrastText: mainPallete.richBlack,
    },
    text: {
      primary: mainPallete.whiteSmoke,
      secondary: mainPallete.whiteSmokeLight, 
      hint: mainPallete.whiteSmokeLight, 
    },
    divider: mainPallete.whiteSmokeLight, 
    secondary: {
      main: mainPallete.whiteSmokeLight,
      contrastText: mainPallete.richBlack,
     
    },
    background: {
      default: mainPallete.whiteSmoke
    },
    action: {
      active: mainPallete.whiteSmoke,
      hover: mainPallete.eerieBlack, 
      selected: mainPallete.whiteSmoke,
      disabled: mainPallete.licorice
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [ 'Rajdhani', 'sans-serif'], 
    fontSize: 15, 
    body2: {
      fontFamily: 'sans-serif'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: mainPallete.whiteSmoke,
        backgroundColor: mainPallete.blue,
        '&:hover': {
          backgroundColor: mainPallete.onyx
        },
        '&:disabled': {
          backgroundColor: mainPallete.spanishGray,
          color: mainPallete.ashGrey
        }

      }, 
      textSecondary: {
        color: mainPallete.whiteSmoke,
        backgroundColor: 'inherit',
        '&:hover': {
          backgroundColor: mainPallete.onyx
        }
      }, 
      label: {
        textTransform: 'none',
      }
    }, 
      MuiLink: {
        root: {
          color: mainPallete.whiteSmoke,
          '&:hover':{
            color: mainPallete.blueberry
            
          }
        }, 
    }, 
   
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
