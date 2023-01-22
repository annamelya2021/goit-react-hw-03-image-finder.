import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem data={data} onClick={onClick} />
    </ul>
  );
};
