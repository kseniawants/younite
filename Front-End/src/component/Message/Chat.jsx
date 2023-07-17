import React, { useState } from 'react';
import Messages from './Messages';
import Inputs from './Inputs';
import Call from '../Modal/Call';
import PropTypes from 'prop-types';
import axios from 'axios';

const Chat = ({ currentChat, friendList, chatRoomInfo, userInfo }) => {
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isCallModalVisible1, setCallModalVisible1] = useState(false);

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
  const SendMessage = () => {
    const [webSocket, setWebSocket] = useState(null);
    const [msg, setMsg] = useState('');
    const [imagedata, setImagedata] = useState('');
    const [uid, setUid] = useState('');

    const connect = () => {
      // 连接 WebSocket
      let ws = new WebSocket('ws://localhost:8080'); // 替换为你的 WebSocket 服务器地址
      ws.onopen = () => {
        console.log('WebSocket 连接成功');
        setWebSocket(ws);
        if (webSocket.readyState === WebSocket.CLOSED) {
          // 如果 WebSocket 已关闭，则重新连接
          connect();
        } else {
          if (imagedata === '') {
            let message = {
              message: msg,
              type: 'text',
              uid: uid,
            };
            webSocket.send(JSON.stringify(message));
            axios.post('/api/messages', message); // 将消息保存到数据库（示例）
            setMsg('');
            setImagedata('');
          } else {
            if (msg !== '') {
              let message1 = {
                message: msg,
                type: 'text',
                uid: uid,
              };
              webSocket.send(JSON.stringify(message1));
              axios.post('/api/messages', message1); // 将消息保存到数据库（示例）
            }
          }
          ws.onmessage = (event) => {
            console.log('接收到消息:', event.data);
          };
          ws.onclose = (event) => {
            console.log('WebSocket 连接关闭');
            setWebSocket(null);
          };
          ws.onerror = () => {
            console.log('WebSocket 错误');
          };
        }

        const sendMessage = () => {
          let chunkSize = 8192;
          let totalimgChunks = Math.ceil(imagedata.byteLength / chunkSize);
          let currentChunk = 0;

          while (currentChunk < totalimgChunks) {
            let start = currentChunk * chunkSize;
            let end = start + chunkSize;
            let chunk = imagedata.slice(start, end);
            if (currentChunk === 0) {
              let message = {
                type: 'image',
                uid: uid,
                chunks: totalimgChunks,
              };
              webSocket.send(JSON.stringify(message));
              axios.post('/api/messages', message); // 将消息保存到数据库（示例）
            }
            webSocket.send(chunk);
            currentChunk++;
          }

          setMsg('');
          setImagedata('');
        };
      };
    };
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
            // src={userInfo.profileAvatar}
            alt=''
          />
          <div className='mx-3'>
            <span className='text-dark' style={{ fontSize: '20px' }}>
              {/* {userInfo.fullName} */}
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
      <Messages
        currentChat={currentChat}
        chatRoomInfo={chatRoomInfo}
        friendList={friendList}
        userInfo={userInfo}
      />
      <Inputs />
    </div>
  );
};

Chat.propTypes = {
  chatRoomInfo: PropTypes.array.isRequired,
  userInfo: PropTypes.array.isRequired,
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
