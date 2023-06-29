// 對話所有內容
import React from 'react'
import MessageItem from './MessageItem'
import '../../styles/messageItem.scss'
import sia from '../../assets/images/sia.png'
import PropTypes from 'prop-types';

const Messages = ({ currentChat }) => {
  console.log('Current chat in Messages', currentChat);
  return (
    <div className='p-2 overflow-auto border-bottom' id='messages' style={{ height: 'calc(100vh - 130px)' }}>
      {currentChat.messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          userImage={currentChat.userInfo.photoURL}
          ownerImage={sia}
          lastMessage={currentChat.lastMessage}
        />
      ))}
    </div>
  )
}

Messages.propTypes = {
  currentChat: PropTypes.object,
};

export default Messages
