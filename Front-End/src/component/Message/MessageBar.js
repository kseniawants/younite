//包住中間的Bar
import React from 'react';
import Search from './Search';
import Messengers from './Messengers';

const MessageBar = () => {
  return (
    <div className=''>
      <div className='pt-3'>
        <h3 className='d-grid justify-content-center'>對話</h3>
        <p className='d-grid justify-content-center text-radio'>好友對話:10/25</p>
      </div>
      <div>
        <Search />
        <Messengers />
      </div>
    </div>
  );
};

export default MessageBar;
