import React from "react";
import styles from './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        <section className="featured">
          <img src="images/feature_orphanking.png" />
        </section>
        <section className="about">
        </section>
        <footer></footer>
      </div>
    )
  }
}

export default Home
