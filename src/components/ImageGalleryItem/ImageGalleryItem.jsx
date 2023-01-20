import css from './ImageGalleryItem.module.css';
console.log(css);
const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItem_image} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
