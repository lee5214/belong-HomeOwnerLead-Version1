import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./common.css";
import AddressSearchBar from "./AddressSearchBar";
class ResultsContainer extends Component {
  state = { low: 0, high: 0 };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.rentData && this.props.rentData !== prevProps.rentData) {
      if (this.props.rentData.rentzestimate) {
        let low = this.props.rentData.rentzestimate.valuationRange.low["$t"];
        let high = this.props.rentData.rentzestimate.valuationRange.high["$t"];
        this.setState({ low, high });
        this.props.updateRange(low, high);
      } else if (this.props.rentData.zestimate) {
        let low = Math.floor(
          (this.props.rentData.zestimate.amount["$t"] * 0.05 * 0.9) / 12 || 0
        );
        let high = Math.trunc(
          (this.props.rentData.zestimate.amount["$t"] * 0.05 * 1.1) / 12 || 0
        );
        this.setState({ low, high });
        this.props.updateRange(low, high);
      } else {
        this.setState({ low: 0, high: 0 });
      }
    }
  }
  render() {
    const {
      error,
      zestimate,
      rentzestimate,
      address,
      citystatezip
    } = this.props.rentData;
    return (
      <div className={`${styles.card} ${styles.resultsContainer}`}>
        {error ? (
          <div>
            <p>No Result for</p>
            <h3>{address}</h3>
            <h6>located in</h6>
            <h3>{citystatezip}</h3>
            <p>Server error:</p>
            <p style={{ color: "tomato" }}>{error}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.infoBlock}>
              <p>Rent Zestimate Valuation Range for</p>
              {address && <h3>{address.street}</h3>}
              <h6>locater in</h6>
              {address && (
                <h3>
                  {address.city} - {address.state} ({address.zipcode})
                </h3>
              )}
            </div>
            <div className={styles.priceBlock}>
              {this.state.low >= 0 ? (
                <h1 style={{ textAlign: "center" }}>
                  {this.state.low} - {this.state.high}
                </h1>
              ) : (
                <h1>Not Available</h1>
              )}
            </div>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
ResultsContainer.propTypes = {
  rentData: PropTypes.object,
  updateRange: PropTypes.func.isRequired,
  searchTerm: PropTypes.func.isRequired
};
ResultsContainer.defaultProps = {
  rentData: {}
};
export default ResultsContainer;
