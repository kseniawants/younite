// 聊天室輸入框
import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';

const Inputs = () => {

  const [isClicked , setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  } 

  return (
    <div
      className='p-2 d-flex align-items-center justify-content-between'
      style={{ height: '50px' }}
    >
      <div className='ps-4'>
        <i
          className='fa-solid fa-paperclip text-radio fa-lg pe-4'
          style={{ cursor: 'pointer' }}
        ></i>
        <i
          className='fa-solid fa-photo-film text-radio fa-lg pe-4'
          style={{ cursor: 'pointer' }}
        ></i>
        {isClicked ? (
            <i 
              className="fa-solid fa-microphone fa-fade fa-lg" 
              style={{color: '#ff0000', }}
              onClick={handleClick}
            />
          ) : (
            <i
              className='fa-solid fa-microphone text-radio fa-lg pe-0'
              style={{ cursor: 'pointer' }}
              onClick={handleClick}
            ></i> 
        )}
      </div>
      <Space.Compact
        style={{
          width: '80%',
          paddingRight: '25px',
        }}
      >
        <Input className='bg-secondary border-0' placeholder='輸入文字' />
        <Button className='bg-primary border-0'>
          <i className='fa-solid fa-paper-plane text-white' />
        </Button>
      </Space.Compact>
    </div>
  );
};

export default Inputs;
