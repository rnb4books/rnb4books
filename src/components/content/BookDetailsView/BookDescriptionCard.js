import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,

    },
    grow: {
      flexGrow: 1,
    },
    card: {
        backgroundColor: mainPallete.licorice,
        paddingRight: '20px',
        paddingLeft: '20px'

    }
    
  
  });
  
  class BookDescriptionCard extends React.Component {
    state = {
    };
  
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title="Description"
                    titleTypographyProps={{variant:'h4'}}
                    />
                    <CardContent>
                    <Typography  variant="body1">
                        Book in a very good condition, bought from bookstore this year.
                    </Typography>
                    </CardContent>
            </Card>
        </div>
      );
    }
  }
  
  BookDescriptionCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRoot(withStyles(styles)(BookDescriptionCard));
  