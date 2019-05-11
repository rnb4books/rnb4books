import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import Link from '@material-ui/core/Link';


const styles = theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'center'

    },
    card: {
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: mainPallete.licorice,
      marginRight: '20px',

    }, 
    content: {
      display: 'flex', 
      flexDirection: 'row', 
    }, 
    media: {
      height: 0,
      paddingTop: '140%',
      marginBottom: '15px',
      display: 'flex', 
  },
    rating: {
      marginBottom: '10px',
    },
    descRate: {
      flex: 1, 
      display: 'flex',
      flexDirection: 'column',
      margin: '5px'

    },
    picture: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      margin: '5px',
    },
    bookLink : {
      display: 'flex',
      textAlign: 'center'
    },
    ratingContent: {
      flex:1,
      justifyContent: 'space-evenly',
      display: 'flex',
      paddingRight: '250px',
      alignItems: 'center',
      backgroundColor: mainPallete.eerieBlack, 
  },
  description: {
    backgroundColor: mainPallete.eerieBlack, 
    padding: '10px'
  }, 
  starIcon : {
    margin: '10px'
  }
  });
  
  class BokkDetailsBar extends React.Component {
    state = {
    };
  
    render() {
      const { classes } = this.props;
      const logo = require('../../../static/1984-2.jpg');

      return (
        <div className={classes.root}>
        <Card className={classes.card}>
            <CardHeader
                title="Book details:"
                titleTypographyProps={{variant:'h5'}}
                />
                <CardContent className={classes.content}>
                  <div className={classes.picture}>
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="Book cover"
                        />
                    <div className={classes.bookLink}>
                      <Link underline='always' >See full book details</Link>
                    </div>
                  </div>
                  <div className={classes.descRate}>
                    <div className={classes.rating}>
                      <div className={classes.ratingContent}>
                        <StarIcon   color='primary' className={classes.starIcon}/>
                        <Typography component="h4" variant="h4">
                            8.9
                        </Typography>
                      </div>
                    </div >
                    <Typography className={classes.description}>
                      {"Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written"}
                    </Typography>
                  </div>             
                </CardContent>
        </Card>
    </div>
      );
    }
  }
  
  BokkDetailsBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRoot(withStyles(styles)(BokkDetailsBar));
  

