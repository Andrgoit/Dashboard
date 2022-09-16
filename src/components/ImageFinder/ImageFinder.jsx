import React, { Component } from 'react';
import { Box } from 'components/Box';
import SearchBlock from './SearchBlock/SearchBlock';
import ImageFinderButton from 'components/ImageFinder/ImageFinderButton/ImageFinderButton';
import StyledList from 'components/ImageFinder/ImageFinderList/ImageFinderList';

class ImageFinder extends Component {
  state = {
    isOpenImageFinder: false,
    query: '',
    page: 1,
  };

  toggleImageFinderButton = () => {
    this.setState(prevState => ({
      isOpenImageFinder: !prevState.isOpenImageFinder,
    }));
  };

  changeQuery = data => {
    this.setState({ query: data });
  };

  render() {
    const { isOpenImageFinder } = this.state;
    const { toggleImageFinderButton } = this;

    return (
      <>
        <ImageFinderButton
          isOpen={isOpenImageFinder}
          onClick={toggleImageFinderButton}
        />
        {isOpenImageFinder && (
          <Box height="400px" bg="imageFinder.bgContainer" borderRadius="md">
            <SearchBlock onSubmit={this.changeQuery} />
            <StyledList />
          </Box>
        )}
      </>
    );
  }
}
export default ImageFinder;
