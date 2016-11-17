import React from "react";
import styles from './styles.css';
import { Link } from 'react-router';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        <section className={styles.hero}>
            <div className={styles.header}>
              <div className={styles.brand}>
                <Link to="/">
                  <img src={require('../../assets/images/logo.svg')} />
                </Link>
                <p>Label & design studio.</p>
              </div>
              <ul className={styles.social}>
                <li><a href="/">FCBK</a></li>
                <li><a href="/">SNDCLD</a></li>
                <li><a href="/">TWTR</a></li>
                <li><a href="/">EML</a></li>
              </ul>
            </div>
            <div className={styles.featured}>
              <div className={styles.coverphoto}>
                <img src={require('../../assets/images/feature_orphanking.png')} />
              </div>
              <div className={styles.artistBanner}>
                <span className={styles.artistName}>Orphan King - <span>Affair Ep</span></span>
                <span className={styles.play}></span>
              </div>
              <p className={styles.artistBannerSubtext}>Available on <a href="#">Soundcloud</a> &  <a href="#">Spotify</a>.</p>
            </div>
        </section>
        <section className={styles.about}>
          <h2>Music For Cannibals</h2>
          <div className={styles.textColumns}>
            <div className={styles.textBlock}>
              <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className={styles.textBlock}>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.</p>
            </div>
          </div>



        </section>
        <footer></footer>
      </div>
    )
  }
}

export default Home
