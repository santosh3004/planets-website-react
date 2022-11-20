import { Close } from '@material-ui/icons';
import React from 'react';
import '../styles/Modal.css'

const Modal = ({isActive}) => {
  return (
    <div className='modal'>
            <div className="close-modal">
                <Close className='icon' onClick={isActive}/>
            </div>

            <div className="inputs">
                <input type="text" placeholder='Search Destination'/>
                <button>next</button>
            </div>

    </div>
  );
};

export default Modal;
