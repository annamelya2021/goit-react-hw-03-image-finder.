import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from '../services/API';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    allImages: [],
    selectedImage: '',
    reqStatus: '',
    request: '',
    page: 1,
    totalImages: 0,
  };

  onImageClick = image => {
    this.setState({ selectedImage: image });
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ reqStatus: 'loading' });
      const result = await fetchImages(request, page);
      this.setState(prevState => ({
        allImages: [...prevState.allImages, ...result.hits],
        totalImages: result.totalHits,
      }));

      this.setState({ reqStatus: null });
    }
  }

  onHandleSubmit = request => {
    this.setState({ allImages: [], request: request, totalImages: 0 });
    console.dir(request);
    console.log('request :>> ', request);
  };

  onClick = e => {
    e.preventDefault();
    this.onHandleSubmit(e.target.elements.request.value.trim());
    if (e.target.elements.request.value.trim() === '') {
      return Notify.failure('empty');
    }
    // e.target.elements.request.value = '';
  };
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { allImages, selectedImage, reqStatus, totalImages } = this.state;
    const showBtn = allImages.length < totalImages;
    return (
      <div className={css.App}>
        <Searchbar onClick={this.onClick} />
        <ImageGallery data={allImages} onClick={this.onImageClick} />
        {selectedImage && (
          <Modal Imglink={selectedImage} onImageClick={this.onImageClick} />
        )}
        {allImages.length > 0 && !reqStatus && showBtn && (
          <Button onClick={this.onLoadMore} />
        )}
        {reqStatus && <Loader />}
      </div>
    );
  }
}

export default App;
