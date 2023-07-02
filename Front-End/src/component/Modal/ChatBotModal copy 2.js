import React, { useState, useEffect, useRef } from 'react';
const { Configuration, OpenAIApi } = require('openai');
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../../styles/Modal/chatbot.scss';

function ChatBotModal({ closeModal }) {
  const draggableRef = useRef(null);
  // 移動視窗 程式碼 START
  const [position, setPosition] = useState({ x: undefined, y: undefined });
  const [fadeIn, setFadeIn] = useState(false); // 追蹤是否需要淡入
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const modalWidth = 500; // 假設 modal 寬度為 500px
    const modalHeight = 300; // 假設 modal 高度為 300px

    const initialX = (screenWidth - modalWidth) / 2;
    const initialY = (screenHeight - modalHeight) / 2;

    setPosition({ x: initialX, y: initialY });
    setFadeIn(true); // 設置淡入為 true，觸發淡入效果
  }, []);

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

  // openAI 程式碼 START
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse('Something is going wrong, Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      {/* 宣告 Draggable handle 選擇抓取的物件範圍 */}
      <Draggable handle='.modal-bg' nodeRef={draggableRef} onDrag={handleDrag}>
        <section
          ref={draggableRef}
          className={`modal-bg container-fluid p-0 ${fadeIn ? 'fade-in' : ''}`}
          style={{ top: position.y, left: position.x }}
        >
          <div className='row p-3'>
            <div className='col-12 d-flex justify-content-end mb-4'>
              <button
                type='button'
                className='btn-close'
                onClick={() => closeModal(false)}
              ></button>
            </div>
            {/* ↓↓↓ 下面可以隨意更改，區塊直接用 col 來寫  ↓↓↓*/}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <form onSubmit={handleSubmit}>
                <textarea
                  type='text'
                  value={prompt}
                  placeholder='Please ask to openai'
                  onChange={(e) => setPrompt(e.target.value)}
                ></textarea>
                <button disabled={loading || prompt.length === 0} type='submit'>
                  {loading ? 'Generating...' : 'Generate'}
                </button>
              </form>
            </div>
            {apiResponse && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <pre>
                  <strong>API response:</strong>
                  {apiResponse}
                </pre>
              </div>
            )}
            {/* ↑↑↑ 上面可以隨意更改，區塊直接用 col 來寫 ↑↑↑ */}
          </div>
        </section>
      </Draggable>
    </>
  );
}

ChatBotModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ChatBotModal;
