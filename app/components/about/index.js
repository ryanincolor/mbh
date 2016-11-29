import React from "react";
import styles from './styles.css';

class About extends React.Component {
  render() {
    return (
      <section className={styles.about}>
        <h2>Music For Cannibals</h2>
        <div className={styles.textColumns}>
          <div className={styles.textBlock}>
            <p>Made by Human is an internet label and design studio chilling on the doorsteps of Stockholm. We are disruptors for an under represeted scene.</p>
          </div>
          <div className={styles.textBlock}>
            <p>The idea was born out of a desire to release music the way we want whenever we want. We value authentic music and honest design.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
