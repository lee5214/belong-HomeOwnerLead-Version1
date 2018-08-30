import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import LocationOn from "@material-ui/icons/LocationOn";
import styles from "./common.css";
import PropTypes from "prop-types";

// for different error messages
const errorBox = {
  ZERO_RESULTS: "Couldn't find any related addresses, please try another",
  INVALID_REQUEST:
    "This request is not valid, it needs to be a string of your location"
};

class AddressSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", address_error: null };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.address !== prevState.address ||
      this.state.address_error !== prevState.address_error
    ) {
      //TODO
      // callback sends address to parent && button enable only when input is a valid address
      if (this.state.address !== "" && this.state.address_error === "") {
        this.props.setButtonEnabled(true);
        this.props.updateSearchTerm(this.state.address);
      } else {
        this.props.setButtonEnabled(false);
      }
    }
  }

  handleChange = address => {
    this.setState({ address });
    this.setState({ address_error: "" });
    if (address === "") {
      this.setState({ address_error: null });
    }
  };

  handleSelect = address => {
    this.setState({ address, address_error: "" });
  };

  render() {
    return (
      <div className={styles.card}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={(status, clearSuggestions) => {
            this.setState({ address_error: errorBox[status] || status });
            clearSuggestions();
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn style={{ padding: 3, fill: "red" }} />
                    </InputAdornment>
                  )
                }}
                error={!!this.state.address_error}
                helperText={this.state.address_error}
                {...getInputProps({
                  placeholder: "Input your location"
                })}
              />
              <div style={{ position: "absolute" }}>
                {loading && (
                  <LocationOn
                    style={{ padding: 5, marginRight: 7, fill: "tomato" }}
                  />
                )}
                {suggestions.map(suggestion => {
                  const style = suggestion.active
                    ? {
                        display: "flex",
                        padding: ".4rem 0rem",
                        backgroundColor: "#5f5f5f",
                        cursor: "pointer",
                        color: "white"
                      }
                    : {
                        display: "flex",
                        padding: ".4rem 0rem",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        color: "black"
                      };
                  return (
                    <List
                      {...getSuggestionItemProps(suggestion, {
                        style
                      })}
                    >
                      <LocationOn
                        style={{ padding: 5, marginRight: 7, fill: "tomato" }}
                      />
                      <span>{suggestion.description}</span>
                    </List>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}
AddressSearchBar.propTypes = {
  setButtonEnabled: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

export default AddressSearchBar;
