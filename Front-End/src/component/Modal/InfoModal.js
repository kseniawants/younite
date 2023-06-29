import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../../styles/Modal/Info.scss';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

function InfoModal({ closeModal, setSelectedButtonLabel }) {
  const [position, setPosition] = useState({ x: 300, y: 100 });
  const [selectedButton, setSelectedButton] = useState(null);

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  const handleButtonClick = (buttonId, buttonLabel) => {
    setSelectedButton(buttonId); // 更新选中状态
    setSelectedButtonLabel(buttonLabel); // 更新选中按钮文字
    setTimeout(() => {
      closeModal(); // 关闭窗口
    }, 2000); // 延迟关闭窗口
  };

  return (
    <>
      <Draggable handle=".title" onDrag={handleDrag}>
        <section className='info container-fluid' style={{ top: position.y, left: position.x }}>
          <div className='modalContainer row'>
            <div className='col-12 d-flex p-0'>
              <button onClick={() => closeModal(false)} className='position-absolute top-0 end-0 me-4 mt-4 bg-transparent'>
                X
              </button>
            </div>
            <div className='title col-12'>
              <h2>現在我想找尋...</h2>
            </div>
            <div className='body'>
              <span>分享答案，才能增加配對率!</span>
              <br />
              <ButtonToolbar aria-label="Toolbar with button groups" className='d-flex justify-content-center my-3'>
                <div className='mb-2'>
                  <ButtonGroup className="me-3" aria-label="First group">
                    <Button
                      variant={selectedButton === 'btnradio1' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio1', '長期伴侶')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      長期伴侶
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-3" aria-label="Second group">
                    <Button
                      variant={selectedButton === 'btnradio2' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio2', '短期關係')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      <span>短期關係</span><br />
                      <span>但不排斥長期</span>
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="" aria-label="Third group">
                    <Button
                      variant={selectedButton === 'btnradio3' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio3', '長期關係')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      <span>長期關係</span><br />
                      <span>但不排斥短期</span>
                    </Button>
                  </ButtonGroup>
                </div>
                <br />
                <div className='mt-2'>
                  <ButtonGroup className="me-3" aria-label="Fourth group">
                    <Button
                      variant={selectedButton === 'btnradio4' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio4', '短暫的享樂')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      短暫的享樂
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-3" aria-label="Fixth group">
                    <Button
                      variant={selectedButton === 'btnradio5' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio5', '新朋友')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      新朋友
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="" aria-label="Sixth group">
                    <Button
                      variant={selectedButton === 'btnradio6' ? 'outline-primary' : 'outline-radio'}
                      onClick={() => handleButtonClick('btnradio6', '我還在思考')}
                      autoComplete="off"
                      className="btnradio"
                    >
                      我還在思考
                    </Button>
                  </ButtonGroup>
                </div>
              </ButtonToolbar>
            </div>
          </div>
        </section>
      </Draggable>
    </>
  );
}

InfoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setSelectedButtonLabel: PropTypes.func.isRequired,
};

export default InfoModal;
