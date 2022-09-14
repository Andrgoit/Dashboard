import React, { Component } from 'react';
import ImageFinderButton from 'components/ImageFinderButton/ImageFinderButton';
import StyledList from 'components/ImageFinderList/ImageFinderList';

class ImageFinder extends Component {
  render() {
    const { isOpenImageFinder, onClick } = this.props;
    return (
      <>
        <ImageFinderButton isOpen={isOpenImageFinder} onClick={onClick} />
        {isOpenImageFinder && <StyledList />}
      </>
    );
  }
}
export default ImageFinder;
