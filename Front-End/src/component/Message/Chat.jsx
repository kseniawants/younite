//Chat.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles/messageItem.scss';
import Call from '../Modal/Call';

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
      let ws = new WebSocket(`ws://localhost:8080/websocket/${id}/2`);
      ws.onopen = () => {
        console.log('WebSocket connection successful');
      };
      ws.onmessage = (event) => {
        console.log('Received message:', event.data);
      };
      ws.onclose = (event) => {
        console.log('WebSocket closed: ' + event.code + ', reason: ' + event.reason);
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
    console.log('Sending message:', message);
    setMessage('');
  };

  //接之前的聊天紀錄
  const renderMessageItem = (message) => {
    const displayImage = message.isOwner ? userInfo.data.profileAvatar : friendList.profileAvatar;
    const lastMessage = chatRoomInfo[chatRoomInfo.length - 1];

    return (
      <div key={message.messageId}>
        <div className={`message ${message.isOwner ? 'owner' : ''}`}>
          <div className='messageInfo'>
            <img
              className='rounded-circle bg-secondary'
              style={{ height: '50px', width: '50px', objectFit: 'cover' }}
              src={displayImage}
              alt=''
            />
          </div>
          <div className='messageContent'>
            <p>{message.messageContent}</p>
            <img className='' src={message.imageURL} alt='' />
          </div>
        </div>
        <div className={`message ${lastMessage.isOwner ? 'owner' : ''}`}>
          <div className='messageInfo'>
            <img
              className='rounded-circle bg-secondary'
              style={{ height: '50px', width: '50px', objectFit: 'cover' }}
              src={displayImage}
              alt=''
            />
          </div>
          <div className='messageContent'>
            <p>{lastMessage.messageContent}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleFileInputChange = (event) => {
    const uid = 333; // 替换为您的uid
    let webSocket;
    const file = event.target.files[0];
    console.log('Selected file:', file);
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:8080/storage/upload', {
      method: 'POST',
      body: formData,
      headers: new Headers({
        'Content-Type': '',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const msg = {
          type: 'image',
          data: res.data,
          ud: uid,
        };
        webSocket.send(JSON.stringify(msg));
        const msgtodb = {
          senderId: 333,
          receiverId: 6,
          messageType: 'image',
          roomId: 36,
          messageContent: res.data,
        };
        fetch('http://localhost:8080/message/add', {
          method: 'POST',
          body: JSON.stringify(msgtodb),
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
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
              {/* {userInfo.state} Online status check */}
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
      <div
        className='p-2 overflow-auto border-bottom'
        id='messages'
        style={{ height: 'calc(100vh - 130px)' }}
      >
        {chatRoomInfo.map((message) => renderMessageItem(message))}
      </div>
      <div
        className='p-2 d-flex align-items-center justify-content-between'
        style={{ height: '50px' }}
      >
        <div className='ps-4'>
          <label htmlFor='fileInput'>
            <i
              className='fa-solid fa-paperclip text-radio fa-lg pe-4'
              style={{ cursor: 'pointer' }}
            ></i>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
          </label>

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
            style={{ width: '700px' }}
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
