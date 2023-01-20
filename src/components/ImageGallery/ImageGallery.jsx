import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
console.log(css);

const ImageGallery = () => {
  return (
    <ul class="gallery">
      <ImageGalleryItem></ImageGalleryItem>
    </ul>
  );
};

export default ImageGallery;
