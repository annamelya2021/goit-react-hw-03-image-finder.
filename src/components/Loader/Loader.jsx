import { Component } from 'react';
import css from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className={css.Loader}>
        <InfinitySpin color="#6562a4" />
      </div>
    );
  }
}

export default Loader;
