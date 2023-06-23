import React from 'react';
import SideNav from '../component/SideNav';
import Chat from '../component/Message/Chat';
import '../styles/chatroom.scss';
import MessageBar from '../component/Message/MessageBar';

const ChatRoom = () => {
  return (
    <>
      <SideNav />
      <div className='container-fluid'>
        <div className='row chatroom-main'>
          <div className='col-3 bg-secondary chatroom-list'>
            <MessageBar />
          </div>
          <div className='col-9 text-white p-0'>
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
