import ReactDOM from 'react-dom';
import './Overlay.scss';
import { Articale } from '../';
import { RxCross2 } from 'react-icons/rx';
import { useEffect } from 'react';

export const Overlay = ({ isOpen, car }) => {
  // eslint-disable-next-line
  useEffect(() => (document.body.style.overflow = 'hidden'), []);

  const closeModal = () => {
    isOpen(false);
    document.body.style.overflow = 'visible';
  };

  return ReactDOM.createPortal(
    <div className="overlay">
      <div>
        <button className="overlay__cross" type="button" onClick={closeModal}>
          <RxCross2 size={20} />
        </button>
        <Articale car={car} />
      </div>
    </div>,
    document.querySelector('#overlay')
  );
};
