// 聊天好友
import React from 'react'
import '../../styles/all.scss'
import { ChatDatas } from './ChatDatas';

const Messengers = () => {

  const handleSelect = (user) => {
    // 在這裡處理選擇使用者的邏輯
    console.log("Selected User:", user);
  };

  return (
    <div>
      {ChatDatas
        ?.sort((a, b) => b.date - a.date)
        .map((chat) => (
        <div 
          className='p-2 d-flex align-items-center gap-2 ' 
          id='userChat' 
          style={{ cursor: 'pointer' }}
          key={chat.userInfo.uid}
          onClick={() => handleSelect(chat.userInfo)}
          >
          <img className='rounded-circle bg-dark' style={{height: '50px', width:'50px' , objectFit: 'cover'}} src={chat.userInfo.photoURL} alt="" />
          <div>
              <span style={{fontSize:'18px'}}>{chat.userInfo.displayName}</span>
              <p style={{fontSize:'14px', color:'#949494'}}>{chat.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Messengers
