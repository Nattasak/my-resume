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
        videoId="xxIsmbVZuSI"
        opts={opts}
        onEnd={this._onEnd}
      />
    );
  }

  _onEnd(event) {
    event.target.destroy();
  }

}

export default YoutubeComponent;
