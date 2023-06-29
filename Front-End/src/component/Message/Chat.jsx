// 包住整個右邊的聊天室
import React, {useState} from 'react'
import Messages from './Messages'
import Inputs from './Inputs'
import { ChatDatas } from './ChatDatas';
import Call from '../Modal/Call';

const Chat = () => {
  // 假設取第一筆聊天資料作為目前聊天的使用者
  const user = ChatDatas[0].userInfo; 
  const [isCallModalVisible, setCallModalVisible] = useState(false);

  const handleCallButtonClick = () => {
    setCallModalVisible(true);
  };  

  return (
    <div className='' style={{flex: '2'}}>
      <div className='d-flex align-items-center justify-content-between p-3 border-bottom' style={{ height: '75px'}}>
        <div className='d-flex mt-2'>
          <img className='rounded-circle bg-secondary' style={{height: '50px', width:'50px' , objectFit: 'cover'}} src={user.photoURL} alt="" />
          <div className='mx-3'>
            <span className='text-dark' style={{fontSize:'20px'}}>{user.displayName}</span>
            <p className='text-radio' style={{fontSize:'12px'}}>1小時前上線</p>
          </div>
        </div>
        <div className='d-flex' style={{gap: '20px'}}>
          <div>
            <i className="fa-solid fa-phone text-dark fa-lg" style={{cursor: 'pointer'}} onClick={handleCallButtonClick}></i>
            {isCallModalVisible && <Call closeModal={() => setCallModalVisible(false)} />}
          </div>
          <div>
            <i className="fa-solid fa-video text-dark fa-lg" style={{ cursor: 'pointer' }}></i>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis text-dark fa-lg" style={{cursor: 'pointer'}}></i>
          </div>
        </div>
      </div>
      <Messages/>
      <Inputs/>
    </div>
  )
}

export default Chat
