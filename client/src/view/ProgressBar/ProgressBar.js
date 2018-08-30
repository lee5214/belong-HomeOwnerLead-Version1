import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./ProgressBar.css";

const stepsArr = ["Input", "Search", "Result", "Submit"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return "name email and phone";
    case 1:
      return "full address";
    case 2:
      return "rent number updates daily";
    case 3:
      return "email is on the way";
    default:
      return "Forward";
  }
}

const stepIndex = {
  signUpStep: 0,
  searchStep: 1,
  resultStep: 2,
  submitStep: 3
};
class ProgressBar extends React.Component {
  state = {
    activeStep: 0,
    windowWidth: 1100
  };
  handleResize = (windowWidth, event) => {
    this.setState({ windowWidth: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  render() {
    console.log(window.innerWidth, this.state.windowWidth);
    const { activeStep } = this.state;

    return (
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>ProgressBar</h1>
        <Stepper
          className={styles.stepper}
          activeStep={stepIndex[this.props.step]}
          orientation={
            this.state.windowWidth > 1000 ? "vertical" : "horizontal"
          }
        >
          {stepsArr.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                {this.state.windowWidth > 1000 && (
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                  </StepContent>
                )}
              </Step>
            );
          })}
        </Stepper>
        {activeStep === stepsArr.length && (
          <Paper square elevation={0} className={styles.resetContainer}>
            <Typography>Done - All steps finished</Typography>
          </Paper>
        )}
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  return { step: state.step };
};
export default connect(mapStateToProps)(ProgressBar);
