import React, { Component } from 'react';
import { Box } from 'components/Box';
import VideoplayerButton from './VideoplayerButton/VideoplayerButton';
import MovieList from './MovieList/MovieList';
import videos from './videos.json';

export default class Videoplayer extends Component {
  state = {
    isOpenVideoplayer: true,
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
    const { isOpenVideoplayer } = this.state;

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
            <Box p={2} width="60%" textAlign="center">
              Здесь будет видеоплеер...
            </Box>
            <Box p={2} width="40%" textAlign="center">
              <MovieList videos={videos} onClick={selectVideo} />
            </Box>
          </Box>
        )}
      </div>
    );
  }
}
