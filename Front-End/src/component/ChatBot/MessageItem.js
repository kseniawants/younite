//一則對話內容
import React from 'react';
import '../../styles/messageItem.scss';

const MessageItem = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          className='rounded-circle bg-secondary'
          style={{ height: '50px', width: '50px', objectFit: 'cover' }}
          src=''
          alt=''
        />
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img
          className=''
          src='https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          alt=''
        />
      </div>
    </div>
  );
};

export default MessageItem;
