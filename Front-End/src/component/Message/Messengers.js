// 聊天好友
import React from 'react'
import '../../styles/all.scss'
import PropTypes from 'prop-types';
import { ChatDatas } from './ChatDatas';

const Messengers = ({ setCurrentChat }) => {

  const handleSelect = (chat) => {
    // 在这里处理选择用户的逻辑
    setCurrentChat(chat);  // 通过父组件传入的函数来更新currentChat
  };

  return (
    <div>
      {ChatDatas?.sort((a, b) => b.date - a.date).map((chat) => (
        <div
          className='p-2 d-flex align-items-center gap-2 '
          id='userChat'
          style={{ cursor: 'pointer' }}
          key={chat.userInfo.uid}
          onClick={() => handleSelect(chat)}
          >
          <img className='rounded-circle bg-dark' style={{height: '50px', width:'50px' , objectFit: 'cover'}} src={chat.userInfo.photoURL} alt="" />
          <div>
            <span style={{ fontSize: '18px' }}>{chat.userInfo.displayName}</span>
            <p style={{ fontSize: '14px', color: '#949494' }}>{chat.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
Messengers.propTypes = {
  setCurrentChat: PropTypes.func.isRequired,
};
export default Messengers;

