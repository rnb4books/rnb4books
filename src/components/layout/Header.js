import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withRoot from '../../withRoot';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginLeft: "10px",    
    textTransform: "none",

  },
  appbar: {
    backgroundColor: "#272c33",
  }
};

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar}position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
            <div>
            <Button component={Link} to="/search" className={classes.button} color="inherit">Search page
            </Button>
            <Button className={classes.button} color="inherit">Manage lists
            </Button>
            <Button component={Link} to="/add-offer" className={classes.button} color="inherit">Add book offer
            </Button>
            </div>
            <div>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <i class="fas fa-inbox"></i>
              </IconButton>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <AccountCircle />
              </IconButton>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <i class="fas fa-chevron-down"></i>
             </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Header));
