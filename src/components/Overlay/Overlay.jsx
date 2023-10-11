import ReactDOM from 'react-dom';
import './Overlay.scss';
import { PopupWindow } from '../';
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
          <RxCross2 size={18} />
        </button>
        <PopupWindow car={car} />
      </div>
    </div>,
    document.querySelector('#overlay')
  );
};
