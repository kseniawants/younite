// 對話所有內容
import React from 'react'
import MessageItem from './MessageItem'
import '../../styles/messageItem.scss'

const Messages = () => {
  return (
    <div className='p-2 overflow-auto border-bottom' id='messages' style={{ height: 'calc(100vh - 130px)' }}>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
    </div>
  )
}

export default Messages
