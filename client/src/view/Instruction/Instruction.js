import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./Instruction.css";

class Instruction extends React.Component {
  state = { expanded: "signUpStep" };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.step !== prevProps.step) {
      this.setState({ expanded: this.props.step });
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({ expanded: expanded ? panel : false });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>Instruction</h1>
        <ExpansionPanel
          expanded={expanded === "signUpStep"}
          onChange={this.handleChange("signUpStep")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.heading}>User Info</Typography>
            <Typography className={styles.secondaryHeading}>
              Enter your name, email and phone number
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              We will not share your information to anyone without your
              permission
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "searchStep"}
          onChange={this.handleChange("searchStep")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.heading}>Search</Typography>
            <Typography className={styles.secondaryHeading}>
              With auto complete
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Input full address, city and state is required and separated by
              comma
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "resultStep"}
          onChange={this.handleChange("resultStep")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.heading}>Search Result</Typography>
            <Typography className={styles.secondaryHeading}>
              Know the rent price for your home
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Estimate and calculate the right amount for renting price
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "submitStep"}
          onChange={this.handleChange("submitStep")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.heading}>Stay connect</Typography>
            <Typography className={styles.secondaryHeading}>
              Submit and subscribe
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Not happy with the results? Tell us your expected number and let
              us help.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Instruction.propTypes = { step: PropTypes.string.isRequired };

const mapStateToProps = state => {
  return { step: state.step };
};
export default connect(mapStateToProps)(Instruction);
