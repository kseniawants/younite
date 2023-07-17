import React from 'react';
import '../../styles/messageItem.scss';
import PropTypes from 'prop-types';

const Messages = ({ chatRoomInfo, friendList, userInfo }) => {
  const renderMessageItem = (message) => {
    const displayImage = message.isOwner ? userInfo.data.profileAvatar : friendList.profileAvatar;

    return (
      <div className={`message ${message.isOwner ? 'owner' : ''}`} key={message.messageId}>
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
    );
  };

  return (
    <div
      className='p-2 overflow-auto border-bottom'
      id='messages'
      style={{ height: 'calc(100vh - 130px)' }}
    >
      {chatRoomInfo.map((message) => renderMessageItem(message))}
    </div>
  );
};

Messages.propTypes = {
  friendList: PropTypes.array.isRequired,
  chatRoomInfo: PropTypes.array.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default Messages;
