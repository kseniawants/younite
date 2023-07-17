import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

const MessageBar = ({ friendList }) => {
  const handleProfileClick = (fullName, profileAvatar) => {
    handleProfileData(fullName, profileAvatar);
  };

  const handleSelect = (fullName, profileAvatar) => {
    handleProfileClick(fullName, profileAvatar);
  };

  const handleProfileData = (fullName, profileAvatar) => {
    // 在這裡處理接收到的數據
    console.log(fullName, profileAvatar);
  };

  return (
    <div>
      <div className='pt-3'>
        <h3 className='d-grid justify-content-center'>對話</h3>
        <p className='d-grid justify-content-center text-radio'>好友對話:10/25</p>
      </div>
      <div>
        <Search />
        {friendList.map((friend) => (
          <div
            className='p-2 d-flex align-items-center gap-2 '
            id='userChat'
            style={{ cursor: 'pointer' }}
            key={friend.userid}
            onClick={() => handleSelect(friend.fullName, friend.profileAvatar)}
          >
            <img
              className='rounded-circle bg-dark'
              style={{ height: '50px', width: '50px', objectFit: 'cover' }}
              src={friend.profileAvatar}
              alt=''
            />
            <div>
              <span style={{ fontSize: '18px' }}>{friend.fullName}</span>
              <p style={{ fontSize: '14px', color: '#949494' }}>{friend.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MessageBar.propTypes = {
  chats: PropTypes.array.isRequired,
  friendList: PropTypes.array.isRequired,
};

export default MessageBar;
