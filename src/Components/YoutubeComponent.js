import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubeComponent extends Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        className="youtubeComponent"
        videoId="7LEmer7wwHI"
        opts={opts}
        onReady={this._onReady}
        //onEnd={this._onEnd}
      />
    );
  }

  _onReady(event) {
    event.target.setVolume(35);
  }

  /*_onEnd(event) {
    event.target.destroy();
  }*/

}

export default YoutubeComponent;
