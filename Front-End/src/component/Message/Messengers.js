// Messengers.js
import React from 'react';
import '../../styles/all.scss';
import PropTypes from 'prop-types';

const Messengers = ({ setCurrentChat, friendList }) => {
  const handleSelect = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div>
      {friendList
        ?.sort((a, b) => b.date - a.date)
        .map((friendList) => (
          <div
            className='p-2 d-flex align-items-center gap-2 '
            id='userChat'
            style={{ cursor: 'pointer' }}
            key={friendList.userid}
            onClick={() => handleSelect(friendList)}
          >
            <img
              className='rounded-circle bg-dark'
              style={{ height: '50px', width: '50px', objectFit: 'cover' }}
              src={friendList.profileAvatar}
              alt=''
            />
            <div>
              <span style={{ fontSize: '18px' }}>{friendList.fullName}</span>
              <p style={{ fontSize: '14px', color: '#949494' }}>{friendList.lastMessage}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

Messengers.propTypes = {
  setCurrentChat: PropTypes.func.isRequired,
  friendList: PropTypes.array.isRequired,
};

export default Messengers;
