import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <>
      {data.map(({ id, tags, webformatURL, largeImageURL }) => (
        <li className={css.ImageGalleryItem} key={id}>
          <img
            onClick={() => onClick(webformatURL)}
            src={largeImageURL}
            alt={tags}
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
};
