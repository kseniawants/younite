import React from 'react'
// import SideNav from '../component/SideNav'
import MessageBar from '../component/Message/MessageBar'

const ChatRoom = () => {
  return (
    <div className="">
        <div className="row mw-100">
            <div className="col-2 text-white bg-dark">
                Column
            </div>
            <div className="col-3">
                <MessageBar/>
            </div>
            <div className="col-7 text-white bg-dark">
                Column
            </div>
        </div>
    </div>
  )
}

export default ChatRoom
