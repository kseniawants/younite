// 對話所有內容
import React from 'react';
import MessageItem from './MessageItem';
import '../../styles/messageItem.scss';
import sia from '../../assets/images/sia.png';
import PropTypes from 'prop-types';

const Messages = ({ currentChat, chatRoomInfo }) => {
  // console.log('Current chat in Messages', currentChat);
  return (
    <div
      className='p-2 overflow-auto border-bottom'
      id='messages'
      style={{ height: 'calc(100vh - 130px)' }}
    >
      {chatRoomInfo.map((message) => (
        <MessageItem
          key={message.messageId}
          message={message.messageContent}
          userImage={currentChat.userInfo.photoURL}
          ownerImage={sia}
          lastMessage={message.messageContent}
          chatRoomInfo={chatRoomInfo}
        />
      ))}
    </div>
  );
};
Messages.propTypes = {
  chatRoomInfo: PropTypes.array.isRequired,
  currentChat: PropTypes.object,
};

export default Messages;
