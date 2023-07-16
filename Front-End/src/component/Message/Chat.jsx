import React, { useState } from 'react';
import Messages from './Messages';
import Inputs from './Inputs';
import Call from '../Modal/Call';
import PropTypes from 'prop-types';
import axios from 'axios';

const Chat = ({ currentChat, friendList }) => {
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isCallModalVisible1, setCallModalVisible1] = useState(false);

  const handleCallButtonClick = () => {
    setCallModalVisible(true);
  };

  const handleCallButtonClick1 = () => {
    setCallModalVisible1(true);
  };

  axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   const ws = new WebSocket('ws://localhost:8080/websocket/" + roomid'); // 填寫 WebSocket 伺服器的 URL
  //   ws.onopen = () => {
  //     console.log('WebSocket 連接成功');
  //   };
  //   ws.onmessage = (event) => {
  //     console.log('接收到訊息:', event.data);
  //   };
  //   ws.onclose = () => {
  //     console.log('WebSocket 連接關閉');
  //   };
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

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
              {/* {user.state} */}
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
              <Call
                currentChat={currentChat}
                friendList={friendList}
                closeModal={() => setCallModalVisible(false)}
              />
            )}
          </div>
          <div>
            <i
              className='fa-solid fa-video text-dark fa-lg'
              style={{ cursor: 'pointer' }}
              onClick={handleCallButtonClick1}
            ></i>
            {isCallModalVisible1 && (
              <Call
                currentChat={currentChat}
                friendList={friendList}
                closeModal={() => setCallModalVisible1(false)}
              />
            )}
          </div>
          <div>
            <i className='fa-solid fa-ellipsis text-dark fa-lg' style={{ cursor: 'pointer' }}></i>
          </div>
        </div>
      </div>
      <Messages currentChat={currentChat} />
      <Inputs />
    </div>
  );
};

Chat.propTypes = {
  currentChat: PropTypes.shape({
    userInfo: PropTypes.shape({
      photoURL: PropTypes.string,
      displayName: PropTypes.string,
      state: PropTypes.string,
    }),
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        // 在此處填寫你的 message 物件的 shape
      }),
    ),
  }).isRequired,
  friendList: PropTypes.shape({
    profileAvatar: PropTypes.string,
    fullName: PropTypes.string,
    userid: PropTypes.string,
  }).isRequired,
};

export default Chat;
