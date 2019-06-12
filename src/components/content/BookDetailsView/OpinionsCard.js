import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import OpinionCard from './OpinionCard';


const styles = theme => ({
    root: {
    
      flexGrow: 1,
      marginTop: '20px',
    },
    grow: {
      flexGrow: 1,
    },
    card: {
        backgroundColor: mainPallete.licorice,
        padding: '2%'

    }
    
  });
  
  class OpinionsCard extends React.Component {
    state = {
    };
  
    render() {
      const { classes, opinions } = this.props;
      return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title="Opinions"
                    titleTypographyProps={{variant:'h4'}}
                    />
                    <CardContent>
                        {opinions.map(opinion => 
                          <OpinionCard
                            rating={opinion.rating}
                            user={opinion.user}
                            comment={opinion.comment}
                          />
                        )}
                    </CardContent>
            </Card>
        </div>
      );
    }
  }
  
  OpinionsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    opinions: PropTypes.array, 
  };

  OpinionsCard.defaultProps = {
    opinions: [], 
    classes: {}
  };
  
  export default withRoot(withStyles(styles)(OpinionsCard));
  