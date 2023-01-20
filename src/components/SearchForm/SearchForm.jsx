import css from './SearchForm.module.css';
import { FcSearch } from 'react-icons/fc';
console.log(css);

const SearchForm = () => {
  return (
    <form className={css.SearchForm}>
      <button type="submit" className={css.SearchFormButton}>
        <FcSearch size="26px"></FcSearch>
        <span className={css.SearchFormButtonLabel}></span>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchForm;
