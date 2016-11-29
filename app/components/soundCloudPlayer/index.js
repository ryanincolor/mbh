import React from "react";
import styles from './styles.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class SoundCloudPlayer extends React.Component {
  render() {
    const classNames = cx({
      'soundcloudPlayer': this.props.showPlayer,
      'soundcloudPlayer-visible': this.props.showPlayer
    })

    return (
      <div className={classNames}>
        <iframe width="100%" height="180" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false"></iframe>
      </div>
    )
  }
}

export default SoundCloudPlayer
