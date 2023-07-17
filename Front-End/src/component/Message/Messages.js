// 對話所有內容
import React from 'react';
import MessageItem from './MessageItem';
import '../../styles/messageItem.scss';
import PropTypes from 'prop-types';

const Messages = ({ chatRoomInfo, friendList, userInfo }) => {
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
          userImage={friendList.profileAvatar}
          ownerImage={userInfo.data.profileAvatar}
          senderId={message.senderId}
          receiverId={message.receiverId}
          messageType={message.messageType}
          lastMessage={message.messageContent}
          chatRoomInfo={chatRoomInfo}
        />
      ))}
    </div>
  );
};
Messages.propTypes = {
  friendList: PropTypes.array.isRequired,
  chatRoomInfo: PropTypes.array.isRequired,
  currentChat: PropTypes.object,
  userInfo: PropTypes.array.isRequired,
};

export default Messages;
