// 包住整個右邊的聊天室
import React from 'react'
import Messages from './Messages'
import Inputs from './Inputs'

const Chat = () => {
  return (
    <div className='' style={{flex: '2'}}>
      <div className='d-flex align-items-center justify-content-between p-3' style={{ height: '75px'}}>
        <span className='text-dark'>Jason</span>
        <div className='d-flex' style={{gap: '20px'}}>
            <i className="fa-solid fa-phone text-dark fa-lg" style={{cursor: 'pointer'}}></i>
            <i className="fa-solid fa-video text-dark fa-lg" style={{cursor: 'pointer'}}></i>
            <i className="fa-solid fa-ellipsis text-dark fa-lg" style={{cursor: 'pointer'}}></i>
        </div>
      </div>
      <Messages/>
      <Inputs/>
    </div>
  )
}

export default Chat
