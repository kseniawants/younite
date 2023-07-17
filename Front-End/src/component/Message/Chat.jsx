import React, { useState, useEffect } from 'react';
import Messages from './Messages';
import Inputs from './Inputs';
import Call from '../Modal/Call';
import PropTypes from 'prop-types';
// import axios from 'axios';

const Chat = ({ friendList, chatRoomInfo, userInfo, userId }) => {
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isCallModalVisible1, setCallModalVisible1] = useState(false);

  const handleCallButtonClick = () => {
    setCallModalVisible(true);
  };

  const handleCallButtonClick1 = () => {
    setCallModalVisible1(true);
  };

  useEffect(() => {
    const ws = new WebSocket(`'ws://localhost:8080/websocket/'`); // 填寫 WebSocket 伺服器的 URL
    ws.onopen = () => {
      console.log('WebSocket 連接成功');
    };
    ws.onmessage = (event) => {
      console.log('接收到訊息:', event.data);
    };
    ws.onclose = () => {
      console.log('WebSocket 連接關閉');
    };
    return () => {
      ws.close();
    };
  }, []);

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
            src={friendList.profileAvatar}
            alt=''
          />
          <div className='mx-3'>
            <span className='text-dark' style={{ fontSize: '20px' }}>
              {friendList.fullName}
            </span>
            <p className='text-radio' style={{ fontSize: '12px' }}>
              {/* {friendList.state} 在線中判斷 */}
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
      <Inputs />
    </div>
  );
};

Chat.propTypes = {
  chatRoomInfo: PropTypes.array.isRequired,
  userInfo: PropTypes.array.isRequired,
  friendList: PropTypes.shape({
    profileAvatar: PropTypes.string,
    fullName: PropTypes.string,
    userid: PropTypes.string,
  }).isRequired,
};

export default Chat;
