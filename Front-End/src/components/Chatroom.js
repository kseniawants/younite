import React from 'react'
import { Avatar, Divider, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button } from 'antd'

const Chatroom = () => {
  return (
    <div className='chatRoom'>
        <Avatar.Group maxCount={2} size="large" maxStyle={{ color: '#f56a00',backgroundColor: '#fde3cf',}}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar style={{ backgroundColor: '#f56a00', }}>
                    K
            </Avatar>
        </Avatar.Group>
        <div className='chatIconGroup'>
        <FontAwesomeIcon icon="fa-phone" className='chatIcon'/>
        <FontAwesomeIcon icon="fa-video" className='chatIcon'/>
        <FontAwesomeIcon icon="fa-ellipsis" className='chatIcon'/>
        </div> 
        <Divider />

        <div className="typeBox">
            <Divider />
            <div className="typeBar">
                <FontAwesomeIcon icon="paperclip"  />
                <FontAwesomeIcon icon="photo-film" />
                <FontAwesomeIcon icon="microphone" />
                <Input type="text" placeholder="輸入文字" />
                <Button type="primary" className='sendBtn' style={{backgroundColor: "#FA6B6B", width: "56px", height: "40px", borderRadius:"8px"}}>
                    <FontAwesomeIcon icon="fa-paper-plane" style={{color: "#ffffff",}} />
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default Chatroom
