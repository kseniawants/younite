import React, {useState} from 'react'
import Messages from './Messages'
import Inputs from './Inputs'
import Call from '../Modal/Call';
import PropTypes from 'prop-types';

const Chat = ({ currentChat }) => {
  // 使用從 props 中取得的 currentChat 代替從 ChatDatas 取得的 user
  const user = currentChat.userInfo; 
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isCallModalVisible1, setCallModalVisible1] = useState(false);

  const handleCallButtonClick = () => {
    setCallModalVisible(true);
  };  
  
  const handleCallButtonClick1 = () => {
    setCallModalVisible1(true);
  }; 

  return (
    <div className='' style={{ flex: '2' }}>
      <div
        className='d-flex align-items-center justify-content-between p-3 border-bottom'
        style={{ height: '75px' }}
      >
        <div className='d-flex mt-2'>
          <img
            className='rounded-circle bg-secondary'
            style={{ height: '50px', width: '50px', objectFit: 'cover' }}
            src={user.photoURL}
            alt=''
          />
          <div className='mx-3'>
            <span className='text-dark' style={{fontSize:'20px'}}>{user.displayName}</span>
            <p className='text-radio' style={{fontSize:'12px'}}>{user.state}</p>
          </div>
        </div>
        <div className='d-flex' style={{gap: '20px'}}>
          <div>
            <i className="fa-solid fa-phone text-dark fa-lg" style={{cursor: 'pointer'}} onClick={handleCallButtonClick}></i>
            {isCallModalVisible && <Call currentChat={currentChat} closeModal={() => setCallModalVisible(false)} />}
          </div>
          <div>
            <i className="fa-solid fa-video text-dark fa-lg" style={{ cursor: 'pointer' }} onClick={handleCallButtonClick1}></i>
            {isCallModalVisible1 && <Call currentChat={currentChat} closeModal={() => setCallModalVisible1(false)} />}
          </div>
          <div>
            <i className="fa-solid fa-ellipsis text-dark fa-lg" style={{cursor: 'pointer'}}></i>
          </div>
        </div>
      </div>
      <Messages currentChat={currentChat}/>
      <Inputs/>
    </div>
  );
};

Chat.propTypes = {
  currentChat: PropTypes.shape({
    userInfo: PropTypes.shape({
      photoURL: PropTypes.string,
      displayName: PropTypes.string,
      state: PropTypes.string,
    }),
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        // 在此處填寫你的 message 物件的 shape
      })
    ),
  }).isRequired,
};

export default Chat  
