import React from 'react'
import SideNav from '../component/SideNav'
import MessageBar from '../component/Message/MessageBar'
import Chat from '../component/Message/Chat'

const ChatRoom = () => {
  return (
    <div className="">
        <div className="row mw-100">
            <div className="col-2 text-white p-0 border-end">
                <SideNav/>
            </div>
            <div className="col-3 bg-secondary vh-100 p-0">
                <MessageBar/>
            </div>
            <div className="col-7 text-white p-0">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ChatRoom
