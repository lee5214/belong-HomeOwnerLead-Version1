import React, { Component } from "react";
import styles from "./History.css";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { fetchRentZestimate } from "../../actions";

class History extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.sectionContainer} style={{ padding: 0 }}>
        <h1 className={styles.sectionTitle}>History</h1>
        <div
          className={styles.sectionContainer}
          style={{ padding: 0, overflow: "scroll" }}
        >
          {Object.keys(history)
            .reverse()
            .map(item => (
              <ListItem
                className={styles.listContainer}
                button
                key={history[item]}
                onClick={() => {
                  this.props.fetchRentZestimate(item);
                }}
              >
                <ListItemText secondary={`${item}`} />
              </ListItem>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history
  };
};
export default connect(
  mapStateToProps,
  { fetchRentZestimate }
)(History);
