import css from './Modal.module.css';
console.log(css);

const Modal = () => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
