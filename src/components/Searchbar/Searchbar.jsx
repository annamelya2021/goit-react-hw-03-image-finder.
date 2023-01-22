import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onClick }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onClick}>
        <button type="submit" className={css.SearchFormButton}>
          <FcSearch size="26px"></FcSearch>
        </button>

        <input
          className={css.SearchFormInput}
          name="request"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;

// e => {
//     e.preventDefault();
//     onClick(e.target.elements.request.value.trim());

//     if (e.target.elements.request.value.trim() === '') {
//       return Notify.failure('empty');
//     }
//   }
