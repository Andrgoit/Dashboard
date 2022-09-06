import css from 'components/SearchBlock/SearchBlock.module.css';
import { BiSearch } from 'react-icons/bi';

const SearchBlock = () => {
  return (
    <div>
      <form className={css.searchBlockForm}>
        <button className={css.searchBlockButton} type="submit">
          <BiSearch size="16px" />
        </button>
        <input
          className={css.searchBlockInput}
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchBlock;
