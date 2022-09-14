import { BiSearch } from 'react-icons/bi';
import { Component } from 'react';
import { toast } from 'react-toastify';

import {
  StyledSearchBlockForm,
  StyledSearchBlockButton,
  StyledSearchBlockInput,
} from 'components/SearchBlock/SearchBlock.styled';

class SearchBlock extends Component {
  state = {
    query: '',
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    if (!this.props.isOpenImageFinder) {
      return toast.info('Image Finder не открыт!');
    }
    if (this.state.query === '') {
      return toast.info('Bad request');
    }
    toast.success('Поиск...');
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handlerChangeForm = e => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SearchBlock;
