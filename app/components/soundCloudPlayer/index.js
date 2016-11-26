import React from "react";
import { SoundPlayerContainer } from 'react-soundplayer/addons';


const resolveUrl = 'https://soundcloud.com/orphanking/when-im-alone';

class SoundCloudPlayer extends React.Component {
    constructor(){
        super();
        this.trackReady = this.trackReady.bind(this);
    }

    trackReady(){
        console.log('Track can be played!')
        // Enable the play button, or start playing programmatically, etc
    }

    render() {
        <div>
            <SoundPlayerContainer resolveUrl={resolveUrl} onReady={this.trackReady}>
            </SoundPlayerContainer>
        </div>
    }
}

export default SoundCloudPlayer
