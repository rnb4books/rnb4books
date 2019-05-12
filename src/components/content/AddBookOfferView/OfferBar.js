import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Autosuggest from 'react-autosuggest';
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  offerBar: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
});

const books = [
  {
    name: "Silmarillion",
    author: "J.R.R. Tolkien"
  },
  {
    name: "1984",
    author: "George Orwell"
  }
];

const getSuggestions = value => {
  console.log("GETTING SUGGESTIONS FOR " + value);
  if (!value) {
    return [];
  }
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  console.log("val: " + books.filter(book =>
      book.name.toLowerCase().slice(0, inputLength) === inputValue));

  if (inputLength === 0 ) {
    return [];
  }
  return books.filter(book =>
      book.name.toLowerCase().slice(0, inputLength) === inputValue)
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}, {suggestion.author}
    </div>
);

const renderInputComponent = inputProps => (
    <TextField
        hintText="Type book title"
        style={{
          width: 800

        }}
        {...inputProps} />
);


class OfferBar extends React.Component {
  state = {
    value:'',
    suggestions: [],
    isOpened: false,
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a book title',
      value,
      onChange: this.onChange
    };

    return (
        <div className={styles.root}>
          <div className={styles.offerBar}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={inputProps}
                onRequestSearch={() => console.log('onRequestSearch')}

                className={styles.offerBar}
            />
          </div>
        </div>
    );
  }
}

OfferBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(OfferBar));
