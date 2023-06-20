import React from 'react';
import PropTypes from 'prop-types';

function DraggableModal({ closeModal }) {
  return (
    <>
      <section className='modal-bg'>
        <div className='modalContainer'>
          <button onClick={() => closeModal(false)}>X</button>
          <div className='title'>
            <h1>Hi Wow</h1>
          </div>
          <div className='body'>
            <p>this is text zone</p>
          </div>
          <div className='footer'>
            <button>確定</button>
            <button onClick={() => closeModal(false)}>取消</button>
          </div>
        </div>
      </section>
      \
    </>
  );
}

export default DraggableModal;
