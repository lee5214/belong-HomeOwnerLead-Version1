import React, { Component } from "react";
import styles from "./App.css";
import Instruction from "./Instruction";
import History from "./History";
import DataCollection from "./DataCollection";
import ProgressBar from "./ProgressBar";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.row}>
          <div className={`${styles.instruction} ${styles.section}`}>
            <Instruction />
          </div>
          <div className={`${styles.history} ${styles.section}`}>
            <History />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.dataCollection} ${styles.section}`}>
            <DataCollection />
          </div>
          <div className={`${styles.progressBar} ${styles.section}`}>
            <ProgressBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
