import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import axios from 'axios';
import '../../styles/Modal/chatbot.scss';

function ChatBotModal({ closeModal }) {
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
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; //openAI 的 Key 變數
  const [input, setInput] = useState(''); //openAI 的 input 狀態
  const [completedSentence, setCompletedSentence] = useState(''); //openAI Return value
  const [messages, setMessages] = useState([]); // 用來存儲對話訊息的狀態
  const fetchData = async (input) => {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        prompt: `Complete this sentence: "${input}"`,
        model: model,
        max_tokens: 50,
        n: 1,
        stop: '.',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    );
    return response.data.choices[0].text;
  };

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      // 將 OpenAI 回應添加到對話訊息的陣列中
      setMessages([...messages, completedSentence]);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* 宣告 Draggable handle 選擇抓取的物件範圍 */}
      <Draggable handle='.modal-bg' onDrag={handleDrag}>
        <section
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
            <div className='chatBotMsg'>
              {messages.map((message, index) => (
                <div key={index} className='chat-owner chatBotContent'>
                  <p>{message}</p>
                </div>
              ))}
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={5}
                placeholder="Type in some words and I'll finish the rest..."
              />
            </div>
            <div className='footer d-flex'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='請輸入聊天訊息'
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn  bg-primary'
                  onClick={handleClick}
                  type='button'
                  id='button-addon2'
                >
                  <i className='fa-solid fa-paper-plane text-white' />
                </button>
              </div>
            </div>
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
