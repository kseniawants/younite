import React, { useState, useMemo, useEffect } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

const MessageBar = ({ friendList, initialSelectData }) => {
  const [selectData, setSelectData] = useState(initialSelectData);

  const handleProfileClick = (fullName, profileAvatar, userid) => {
    handleProfileData(fullName, profileAvatar, userid);
  };

  const handleSelect = (fullName, profileAvatar, userid) => {
    handleProfileClick(fullName, profileAvatar, userid);
  };

  const handleProfileData = (fullName, profileAvatar, userid) => {
    // 在这里处理接收到的数据
    setSelectData({ fullName, profileAvatar, userid });
  };

  useEffect(() => {
    console.log('selectData', selectData);
  }, [selectData]);

  // 使用useMemo缓存渲染的好友列表
  const renderedFriendList = useMemo(() => {
    return friendList.map((friend) => (
      <div
        className='p-2 d-flex align-items-center gap-2 '
        id='userChat'
        style={{ cursor: 'pointer' }}
        key={friend.userid}
        onClick={() => handleSelect(friend.fullName, friend.profileAvatar, friend.userid)}
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
    ));
  }, [friendList]);

  return (
    <div>
      <div className='pt-3'>
        <h3 className='d-grid justify-content-center'>對話</h3>
        <p className='d-grid justify-content-center text-radio'>好友對話:10/25</p>
      </div>
      <div>
        <Search />
        {renderedFriendList}
      </div>
    </div>
  );
};

MessageBar.propTypes = {
  chats: PropTypes.array.isRequired,
  friendList: PropTypes.array.isRequired,
  initialSelectData: PropTypes.object.isRequired,
};

export default MessageBar;
