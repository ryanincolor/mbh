import React from "react";
import styles from './styles.css';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

import SoundCloudPlayer from '../soundCloudPlayer';
import About from '../about';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false
    }
  }

  onClick() {
    this.setState({ showPlayer: !this.state.showPlayer });
  }
  render() {
    const playClassNames = cx({
      'play': 'play',
      'play-active' : this.state.showPlayer,
    })

    return (
      <div className="home">
        <section className={styles.hero}>
            <div className={styles.header}>
              <div className={styles.brand}>
                <Link to="/">
                  <img src={require('../../assets/images/logo.svg')} />
                </Link>
                <p>Record Label & Design Studio.</p>
              </div>
              <ul className={styles.social}>
                <li><a href="https://www.facebook.com/mbhrecords/" target="_blank">FCBK</a></li>
                <li><a href="https://soundcloud.com/mbhrecords" target="_blank">SNDCLD</a></li>
                <li><a href="https://twitter.com/madebyhuman_" target="_blank">TWTR</a></li>
                <li><a href="mailto:hello@ryanpittman.com">EML</a></li>
              </ul>
            </div>
           {/*  <div className={styles.featured}>
              <div className={styles.player}>

                {this.state.showPlayer ? <SoundCloudPlayer showPlayer={this.state.showPlayer} /> : null}
                <div className={styles.artistBanner} onClick={this.onClick.bind(this)}>
                  <span className={styles.artistName}>Orphan King -<span> When Im Alone</span></span>
                  <span className={playClassNames} ></span>
                </div>
              </div> *
            </div>
            */}
        </section>
        <footer>
          <span> © made by human 2017</span>
          <span> <a href="mailto:hello@madebyhuman.se">hello@madebyhuman.se</a></span>
        </footer>
        <p className={styles.fullsite}> Full site soon </p>
      </div>
    )
  }
}

export default Home
