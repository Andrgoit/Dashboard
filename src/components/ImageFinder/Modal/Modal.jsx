import React, { Component } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  close = e => {
    if (e.currentTarget === e.target) {
    }
  };

  render() {
    const { close } = this;
    const { isOpen } = this.state;

    return (
      <StyledOverlay onClick={close}>
        <StyledModal>{this.props.children}</StyledModal>
      </StyledOverlay>
    );
  }
}
