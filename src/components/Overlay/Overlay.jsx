import ReactDOM from 'react-dom';
import './Overlay.scss';
import { Articale } from '../';
import { RxCross2 } from 'react-icons/rx';

export const Overlay = ({ isOpen, car }) => {
  return ReactDOM.createPortal(
    <div className="overlay">
      <div>
        <button
          className="overlay__cross"
          type="button"
          onClick={() => isOpen(false)}
        >
          <RxCross2 size={20} />
        </button>
        <Articale car={car} />
      </div>
    </div>,
    document.querySelector('#overlay')
  );
};
