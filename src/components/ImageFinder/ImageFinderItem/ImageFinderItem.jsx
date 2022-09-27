import { Component } from 'react';
import { StyledItem, StyledImg } from './ImageFinderItem.styled';
import Modal from '../Modal/Modal';

class ImageFinderItem extends Component {
  state = {
    image: null,
    isOpenModal: false,
  };

  changeImage = img => {
    this.setState({ image: img });
  };

  closeModal() {
    this.setState({ isOpenModal: false });
  }

  render() {
    const { image, isOpenModal } = this.state;
    const { changeImage, closeModal } = this;
    const { id, largeImageURL, tags, webformatURL } = this.props;
    return (
      <>
        <StyledItem
          key={id}
          onClick={() => {
            changeImage(largeImageURL);
            this.setState({ isOpenModal: true });
          }}
        >
          <StyledImg src={webformatURL} alt={tags} />
        </StyledItem>
        {image && isOpenModal && (
          <Modal>
            <StyledImg src={largeImageURL} isOpenModal={closeModal} />
          </Modal>
        )}
      </>
    );
  }
}
export default ImageFinderItem;
