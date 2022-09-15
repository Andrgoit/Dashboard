import React, { Component } from 'react';
import { StyledInput, StyledForm } from './SearchForm.styled';

export default class SearchForm extends Component {
  state = {
    filter: '',
  };

  handlerChangeForm = e => {
    // this.setState({ filter: e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    // const { filter } = this.state;
    const { handlerChangeForm } = this;
    return (
      <StyledForm action="#">
        <StyledInput
          onChange={handlerChangeForm}
          //   value={filter}
          name="filter"
          type="text"
        />
      </StyledForm>
    );
  }
}
