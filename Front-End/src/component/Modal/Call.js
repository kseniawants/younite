import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../../styles/Modal/call.scss'

function Call({ closeModal }) {
  const [position, setPosition] = useState({ x: 500, y: 100 });

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return (
    <>
      <Draggable handle='.title' onDrag={handleDrag}>
        <section className='userImg modal-bg container-fluid' style={{ top: position.y, left: position.x }}>
          <div className='modalContainer row'>
            {/* <div className='col-12 d-flex p-0'>
              <button onClick={() => closeModal(false)} className='position-absolute top-0 end-0 me-4 mt-4 bg-transparent'>
                X
              </button>
            </div> */}
            <div className='title col-12 text-dark mb-5'>
              <h1>Hi Wow</h1>
            </div>
            <div className='body d-flex justify-content-around my-5'>
              {/* <p>this is text zone</p> */}
              <button className='button1'><i className="fa-solid fa-microphone-slash text-light"></i></button>
              <button className='button1'><i className="fa-solid fa-video text-light"></i></button>
              <button className='button1'><i className="fa-solid fa-volume-high text-light"></i></button>
            </div>
            <div className='footer mt-5'>
              <button className='button2' onClick={() => closeModal(false)}>
                <i className="fa-solid fa-phone-slash text-light"></i>
              </button>
            </div>
          </div>
        </section>
      </Draggable>
    </>
  );
}

Call.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Call;
