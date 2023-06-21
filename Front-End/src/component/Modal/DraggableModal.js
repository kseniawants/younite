import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../styles/component/draggableModal.scss';

function DraggableModal({ closeModal }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return (
    <>
      <Draggable handle='.title' onDrag={handleDrag}>
        <section className='modal-bg container-fluid' style={{ top: position.y, left: position.x }}>
          <div className='modalContainer row'>
            <div className='col-12 d-flex p-0'>
              <button onClick={() => closeModal(false)} className=''>
                X
              </button>
            </div>
            <div className='title col-12'>
              <h1>Hi Wow</h1>
            </div>
            <div className='body'>
              <p>this is text zone</p>
            </div>
            <div className='footer d-flex'>
              <button className='col-5'>確定</button>
              <button className='col-5' onClick={() => closeModal(false)}>
                取消
              </button>
            </div>
          </div>
        </section>
      </Draggable>
    </>
  );
}

DraggableModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default DraggableModal;
