import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import SearchBar from 'material-ui-search-bar'
import Filters from './Filters'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    marginRight: "10px",
    color: "white",
  },
  filters: {
    display: 'flex',
    justifyContent: "center",
  },
  button: {
    marginLeft: '10px',
  }
});

const genres = [
  'Fantasy',
  'Science Fiction',
  'Western',
  'Romance',
  'Thriller',
  'Tragedy',
  'Mystery',
  'Dystopia',
];

const publishers = [
  'Penguin',
  'Hachette',
  'Wiley',
  'HarperCollins',
];

const condition = [
  'excellent condition',
  'good condition',
  'average condition',
  'bad condition',
]

class Search extends React.Component {
  state = {
    isOpened: true,
    checkedA: true,
    searchValue : '',
  };


  handleClick = () => {
    this.setState({isOpened : !this.state.isOpened})
  }

  handleChange = () => {
    this.setState({checkedA: !this.state.checkedA})
  }

  setSearch = () => {
      this.props.search(this.state.searchValue, this.state.genre, this.state.publisher, this.state.condition);
  }

  clearSearch = () => {
    this.setState({searchValues : ''},
    () => this.props.search(this.state.searchValue))
  }

  onSearchChange = (value) => {
    this.setState({
      searchValue: value,
    })
  }

  onGenreChange = (value) => {
    this.setState({genre: value,}, () => this.setSearch())
  }
  onPublisherChange = (value) => {
    this.setState({publisher: value,}, () => this.setSearch())
  }
  onConditionChange = (value) => {
    this.setState({condition: value,}, () => this.setSearch())
  }

  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.search}>

         <SearchBar
           value = {this.state.searchValue}
           onCancelSearch={() => this.clearSearch()} 
           onChange={this.onSearchChange}
           onRequestSearch={() => this.setSearch()}
          style={{
            width: 800

          }}
         />
         <Button className={classes.button}>Search</Button>

         </div>
          {this.state.isOpened && (
            <div className={classes.filters}>
              <Filters label={'Genre'} names={genres} value = {this.state.genre}
                       search={this.onGenreChange}/>
              <Filters label={'Publisher'} names={publishers} value = {this.state.publisher}
                       search={this.onPublisherChange}/>
              <Filters label={'Condition'} names={condition} value = {this.state.condition}
                       search={this.onConditionChange}/>
              <FormControlLabel
                control={
                <Checkbox checked={this.state.checkedA} onChange={this.handleChange} />
              }
              label="Search near by"
              />
            </div>

        )}
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.func
};

export default withRoot(withStyles(styles)(Search));
