import { BiSearch } from 'react-icons/bi';
import { Component } from 'react';
import { toast } from 'react-toastify';

import {
  StyledContainer,
  StyledSearchBlockForm,
  StyledSearchBlockButton,
  StyledSearchBlockInput,
} from 'components/ImageFinder/SearchBlock/SearchBlock.styled';

class SearchBlock extends Component {
  state = {
    query: '',
  };

  handlerSubmitForm = e => {
    const { query } = this.state;

    e.preventDefault();

    if (query.trim() === '') {
      return toast.info('Bad request');
    }
    toast.success('Поиск...');
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  handlerChangeForm = e => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <StyledContainer>
        <StyledSearchBlockForm onSubmit={this.handlerSubmitForm}>
          <StyledSearchBlockButton type="submit">
            <BiSearch size="16px" />
          </StyledSearchBlockButton>
          <StyledSearchBlockInput
            onChange={this.handlerChangeForm}
            value={this.state.query}
            name="query"
            type="text"
            placeholder="Search..."
          />
        </StyledSearchBlockForm>
      </StyledContainer>
    );
  }
}

export default SearchBlock;
