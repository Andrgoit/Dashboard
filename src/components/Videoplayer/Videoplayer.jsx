import React, { Component } from 'react';
import { Box } from 'components/Box';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import VideoplayerButton from './VideoplayerButton/VideoplayerButton';
import MovieList from './MovieList/MovieList';
import videos from './videos.json';
import Player from './Player/Player';

export default class Videoplayer extends Component {
  state = {
    isOpenVideoplayer: false,
    urlSelectedMovie: null,
  };

  toggleVideoplayerButton = () => {
    this.setState(prevState => ({
      isOpenVideoplayer: !prevState.isOpenVideoplayer,
    }));
  };

  selectVideo = link => {
    this.setState({ urlSelectedMovie: link });
  };

  render() {
    const { toggleVideoplayerButton, selectVideo } = this;
    const { isOpenVideoplayer, urlSelectedMovie } = this.state;

    return (
      <div>
        <VideoplayerButton
          isOpen={isOpenVideoplayer}
          onClick={toggleVideoplayerButton}
        />
        {isOpenVideoplayer && (
          <Box
            p={2}
            display="flex"
            // textAlign="center"
            borderRadius="6px"
            height="100%"
            bg="videoplayer.bgContainer"
          >
            <Box width="80%" p={2}>
              <Player url={urlSelectedMovie} />
            </Box>
            <Box p={2} width="120px" textAlign="center">
              <MovieList videos={videos} onClick={selectVideo} />
            </Box>
          </Box>
        )}
      </div>
    );
  }
}
