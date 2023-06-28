import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../../styles/Modal/draggableModal.scss';

function DraggableModal({ closeModal }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    const { deltaX, deltaY } = ui;

    // 調整速度限制
    const speedFactor = 0.2; // 調整此數值以改變速度
    const newPosition = {
      x: x + deltaX * speedFactor,
      y: y + deltaY * speedFactor,
    };

    setPosition(newPosition);
  };

  return (
    <>
      {/* 宣告 Draggable handle 選擇抓取的物件範圍 */}
      <Draggable handle='.modal-bg' onDrag={handleDrag}>
        <section className='modal-bg container-fluid' style={{ top: position.y, left: position.x }}>
          <div className='row p-3'>
            <div className='col-12 d-flex p-0 justify-content-end'>
              <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={() => closeModal(false)}
              ></button>
            </div>
            {/* ↓↓↓ 下面可以隨意更改，區塊直接用 col 來寫  ↓↓↓*/}
            <h1 className='col-12'>Hi Wow</h1>
            <p>this is text zone</p>
            <div className='footer d-flex'>
              <button className='col-5'>確定</button>
              <button className='col-5' onClick={() => closeModal(false)}>
                取消
              </button>
            </div>
            {/* ↑↑↑ 上面可以隨意更改，區塊直接用 col 來寫 ↑↑↑ */}
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
