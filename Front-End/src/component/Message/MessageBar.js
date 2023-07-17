// MessageBar.js
import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import Messengers from './Messengers';

const MessageBar = ({ chats, friendList }) => {
  return (
    <div>
      <div className='pt-3'>
        <h3 className='d-grid justify-content-center'>對話</h3>
        <p className='d-grid justify-content-center text-radio'>好友對話:10/25</p>
      </div>
      <div>
        <Search />
        <Messengers chats={chats} friendList={friendList} />
      </div>
    </div>
  );
};

MessageBar.propTypes = {
  chats: PropTypes.array.isRequired,
  friendList: PropTypes.array.isRequired,
};

export default MessageBar;
