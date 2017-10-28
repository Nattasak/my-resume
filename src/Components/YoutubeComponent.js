import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubeComponent extends Component {
  render() {
    const opts = {
      height: '390',
      width: '679',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        className="youtube"
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
