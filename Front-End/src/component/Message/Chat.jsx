import React, { useState, useEffect } from 'react';
import Messages from './Messages';
import Call from '../Modal/Call';
import PropTypes from 'prop-types';
import axios from 'axios';

const Chat = ({ friendList, chatRoomInfo, userInfo, fullName, profileAvatar }) => {
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isCallModalVisible1, setCallModalVisible1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');

  const handleCallButtonClick = () => {
    setCallModalVisible(true);
  };

  const handleCallButtonClick1 = () => {
    setCallModalVisible1(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resUserInfo = await axios.get('/users/profile');
      const id = resUserInfo.data.data.userId;
      let ws = new WebSocket(`ws://localhost:8080/websocket/${id}/2`); // 填寫 WebSocket 伺服器的 URL
      ws.onopen = () => {
        console.log('WebSocket 連接成功');
      };
      ws.onmessage = (event) => {
        console.log('接收到訊息:', event.data);
      };
      ws.onclose = (event) => {
        console.log('WebSocket close：' + event.code + '，原因：' + event.reason);
      };
      ws.onerror = () => {
        console.log('Error');
      };
      return Promise.resolve(ws);
    };

    const wsPromise = fetchData();

    return () => {
      wsPromise.then((ws) => ws.close());
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    // 在這裡處理發送訊息的邏輯，例如調用API或通知父組件
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className='' style={{ flex: '2' }}>
      <div
        className='d-flex align-items-center justify-content-between p-3 border-bottom'
        style={{ height: '75px' }}
      >
        <div className='d-flex mt-2'>
          <img
            className='rounded-circle bg-secondary'
            style={{ height: '50px', width: '50px', objectFit: 'cover' }}
            src={profileAvatar}
            alt=''
          />
          <div className='mx-3'>
            <span className='text-dark' style={{ fontSize: '20px' }}>
              {fullName}
            </span>
            <p className='text-radio' style={{ fontSize: '12px' }}>
              {/* {userInfo.state} 在線中判斷 */}
            </p>
          </div>
        </div>
        <div className='d-flex' style={{ gap: '20px' }}>
          <div>
            <i
              className='fa-solid fa-phone text-dark fa-lg'
              style={{ cursor: 'pointer' }}
              onClick={handleCallButtonClick}
            ></i>
            {isCallModalVisible && (
              <Call friendList={friendList} closeModal={() => setCallModalVisible(false)} />
            )}
          </div>
          <div>
            <i
              className='fa-solid fa-video text-dark fa-lg'
              style={{ cursor: 'pointer' }}
              onClick={handleCallButtonClick1}
            ></i>
            {isCallModalVisible1 && (
              <Call friendList={friendList} closeModal={() => setCallModalVisible1(false)} />
            )}
          </div>
          <div>
            <i className='fa-solid fa-ellipsis text-dark fa-lg' style={{ cursor: 'pointer' }}></i>
          </div>
        </div>
      </div>
      <Messages chatRoomInfo={chatRoomInfo} friendList={friendList} userInfo={userInfo} />
      <div
        className='p-2 d-flex align-items-center justify-content-between'
        style={{ height: '50px' }}
      >
        <div className='ps-4'>
          <i
            className='fa-solid fa-paperclip text-radio fa-lg pe-4'
            style={{ cursor: 'pointer' }}
          ></i>
          <i
            className='fa-solid fa-photo-film text-radio fa-lg pe-4'
            style={{ cursor: 'pointer' }}
          ></i>
          {isClicked ? (
            <i
              className='fa-solid fa-microphone fa-fade fa-lg'
              style={{ color: '#ff0000' }}
              onClick={handleClick}
            />
          ) : (
            <i
              className='fa-solid fa-microphone text-radio fa-lg pe-0'
              style={{ cursor: 'pointer' }}
              onClick={handleClick}
            ></i>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type='text'
            id='msg'
            className='bg-secondary border-0'
            placeholder='輸入文字'
            value={message}
            onChange={handleChange}
          />
          <button className='bg-primary border-0' onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

Chat.propTypes = {
  chatRoomInfo: PropTypes.array.isRequired,
  userInfo: PropTypes.array.isRequired,
  friendList: PropTypes.array.isRequired,
  fullName: PropTypes.string.isRequired,
  profileAvatar: PropTypes.string.isRequired,
};

export default Chat;
