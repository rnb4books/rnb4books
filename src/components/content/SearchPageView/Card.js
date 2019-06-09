import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom'
import StarIcon from '@material-ui/icons/Star';
import {mainPallete} from '../../layout/colors';


const styles = theme => ({
  card: {
    width: 220,
    margin: "10px",
    backgroundColor: mainPallete.eerieBlack,
    marginRight: '50px'
  },
  media: {
    height: 0,
    paddingTop: '140%', // 16:9
    // backgroundSize: 'contain'
  },
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  localisation: {
        display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  icon: {
    marginRight: '10px',
  }
});

class BookResultCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick = () => {
    console.log('CLICKED')
  }

  render() {
    const { classes, id } = this.props;
    const logo = require('../../../static/'+this.props.logo);
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const address = this.props.address;
    const rating = this.props.rating;

    return (
      <Card className={classes.card}>
      <CardActionArea component={Link} to={'/book-details/' + id}>
       <CardHeader
          avatar={
            <div className={classes.rating}>
            <StarIcon/>
            <span>{rating}</span>
            </div>
          }
          title={title}
          subheader={this.props.subtitle}
        />
        <CardMedia
          className={classes.media}
          image={logo}
          title="Paella dish"
        />
        <CardContent>
         <div className={classes.localisation}>
         <div  className={classes.icon}>
            <i class="fas fa-map-marker-alt"></i>
            </div>
          <Typography component="p">
            {address}
          </Typography>
          </div>
        </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

BookResultCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string
};

BookResultCard.defaultProps = {
  id: 'example1'
}

export default withStyles(styles)(BookResultCard);