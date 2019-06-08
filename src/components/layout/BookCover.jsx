import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { mainPallete } from './colors';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const styles = theme => ({
    media: {
        minHeight: 399.6,
        minWidth: 283.2,
        display: 'flex',
        margin: '30px',
    },
    picture: {
        margin: '10px',
        backgroundColor: mainPallete.eerieBlack, 
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bookmarkIcon: {
        fontSize: 80, 
        color: mainPallete.whiteSmokeLight, 
        padding: '0px', 
        margin: '0px', 
        alignSelf:'flex-start', 
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
  }
});


class BookCover extends React.Component {
    state = {
    };

    render() {
        const { classes, image, showBookmark} = this.props;
        return (
            <div className={classes.picture}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Book cover"
            >
            { showBookmark && 
                <div>                       
                    <BookmarkIcon className={classes.bookmarkIcon}>
                    </BookmarkIcon>
                </div>
            }
            </CardMedia>

        </div>
        );
    }
}

BookCover.propTypes = {
    image: PropTypes.object,
    showBookmark: PropTypes.bool,
    classes: PropTypes.object.isRequired,
};

BookCover.defaultProps = {
    showBookmark: true,
    image: undefined,
    classes: {},
}

export default withStyles(styles)(BookCover);
