import { BiSearch } from 'react-icons/bi';

import {
  StyledSearchBlockForm,
  StyledSearchBlockButton,
  StyledSearchBlockInput,
} from 'components/SearchBlock/SearchBlock.styled';

const SearchBlock = () => {
  return (
    <div>
      <StyledSearchBlockForm>
        <StyledSearchBlockButton type="submit">
          <BiSearch size="16px" />
        </StyledSearchBlockButton>
        <StyledSearchBlockInput type="text" placeholder="Search..." />
      </StyledSearchBlockForm>
    </div>
  );
};

export default SearchBlock;
