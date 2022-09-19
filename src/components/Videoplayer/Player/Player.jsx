import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { RotatingLines } from 'react-loader-spinner';
import { PlayerWrapper, StyledContainer } from './Player.styled';
import Notification from '../Notification/Notification';

export default class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;

    const playerWidth = isVideoLoaded ? '100%' : 0;
    const playerHeight = isVideoLoaded ? '100%' : 0;

    return (
      <StyledContainer>
        {url && !isVideoLoaded && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        {url ? (
          <PlayerWrapper>
            <ReactPlayer
              width={playerWidth}
              height={playerHeight}
              url={url}
              controls
              onReady={() => this.setState({ isVideoLoaded: true })}
            />
          </PlayerWrapper>
        ) : (
          <Notification message="Выберите видео из списка ..." />
        )}
      </StyledContainer>
    );
  }
}
