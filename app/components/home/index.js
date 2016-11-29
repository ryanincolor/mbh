import React from "react";
import styles from './styles.css';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
            <p className={styles.fullsite}> Full site soon </p>
            <div className={styles.header}>
              <div className={styles.brand}>
                <Link to="/">
                  <img src={require('../../assets/images/logo.svg')} />
                </Link>
                <p>Label & design studio.</p>
              </div>
              <ul className={styles.social}>
                <li><a href="https://www.facebook.com/madebyhumann/" target="_blank">FCBK</a></li>
                <li><a href="https://soundcloud.com/madebyhumanrecords" target="_blank">SNDCLD</a></li>
                <li><a href="https://twitter.com/madebyhuman_" target="_blank">TWTR</a></li>
                <li><a href="mailto:hello@ryanpittman.com">EML</a></li>
              </ul>
            </div>
            <div className={styles.featured}>
              <div className={styles.coverphoto}>
                <img src={require('../../assets/images/feature_orphanking.png')} />
              </div>
              <div className={styles.player}>

                {this.state.showPlayer ? <SoundCloudPlayer showPlayer={this.state.showPlayer} /> : null}
                <div className={styles.artistBanner} onClick={this.onClick.bind(this)}>
                  <span className={styles.artistName}>Orphan King - <span>Affair Ep</span></span>
                  <span className={playClassNames} ></span>
                </div>
                <p className={styles.artistBannerSubtext}>Available on <a href="http://soundcloud.com/orphanking">Soundcloud</a></p>
              </div>
            </div>
        </section>
        <About />
      </div>
    )
  }
}

export default Home
