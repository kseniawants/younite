import React, { useState } from 'react';
import SideNav from '../component/SideNav';
import Chat from '../component/Message/Chat';
import '../styles/chatroom.scss';
import MessageBar from '../component/Message/MessageBar';
import { ChatDatas } from '../component/Message/ChatDatas';

const ChatRoom = () => {
  // 創建一個新的 state 變量 currentChat，並初始化為 ChatDatas 的第一個元素
  const [currentChat, setCurrentChat] = useState(ChatDatas[0]);

  return (
    <>
      <SideNav />
      <div className='container-fluid'>
        <div className='row chatroom-main'>
          <div className='col-3 bg-secondary chatroom-list'>
            <MessageBar chats={ChatDatas} setCurrentChat={setCurrentChat} />
          </div>
          <div className='col-9 text-white p-0'>
            <Chat currentChat={currentChat} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
