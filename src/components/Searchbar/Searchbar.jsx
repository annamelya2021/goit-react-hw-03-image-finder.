import SearchForm from 'components/SearchForm';
import css from './Searchbar.module.css';
console.log(css);

const SearchBar = () => {
  return (
    <header className={css.Searchbar}>
      <SearchForm></SearchForm>
    </header>
  );
};

export default SearchBar;
