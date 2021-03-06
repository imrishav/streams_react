import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = ({ title, content, actions, onClose }) => {
  return ReactDOM.createPortal(
    <div onClick={onClose} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visiable active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
