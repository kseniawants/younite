//一則對話內容
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/messageItem.scss';

const MessageItem = ({ message, userImage, ownerImage, lastMessage }) => {
  console.log(message, userImage, ownerImage);

  const displayImage = message.isOwner ? ownerImage : userImage;
  const displayImage1 = lastMessage.isOwner ? ownerImage : userImage;

  return (
    <div>
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
          <p>{message.text}</p>
          <img
            className=''
            src={message.imageURL}
            alt=''
          />
        </div>
      </div>
      <div className={`message ${lastMessage.isOwner ? 'owner' : ''}`}>
        <div className='messageInfo'>
          <img
            className='rounded-circle bg-secondary'
            style={{ height: '50px', width: '50px', objectFit: 'cover' }}
            src={displayImage1}
            alt=''
          />
        </div>
        <div className='messageContent'>
          <p>{lastMessage.text}</p>
          {/* <img
            className=''
            src={message.imageURL}
            alt=''
          /> */}
        </div>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    isOwner: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
  userImage: PropTypes.string.isRequired,
  ownerImage: PropTypes.string.isRequired,
  lastMessage: PropTypes.shape({
    isOwner: PropTypes.bool.isRequired,
    // id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default MessageItem;
