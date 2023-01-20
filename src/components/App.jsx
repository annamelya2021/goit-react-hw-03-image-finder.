import css from './App.module.css';
import Searchbar from './Searchbar';

export const App = () => {
  return (
    <>
      <div className={css.App} style={{}}>
        <Searchbar
        //  onSubmit={}
        ></Searchbar>
        React homework template
      </div>
    </>
  );
};
