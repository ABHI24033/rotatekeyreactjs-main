import React from 'react';
import YouTube from 'react-youtube';


export default class Youtube extends React.Component {
  render() {



    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return(
        <span>
 <YouTube videoId="1d36fGE32s0" opts={opts} onReady={this._onReady} />;

        </span>
    ) 
   
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}