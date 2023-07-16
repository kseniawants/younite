// ChatRoom.js
import React, { useEffect, useState } from 'react';
import SideNav from '../component/SideNav';
import Chat from '../component/Message/Chat';
import '../styles/chatroom.scss';
import MessageBar from '../component/Message/MessageBar';
import { ChatDatas } from '../component/Message/ChatDatas';
import axios from 'axios';

const ChatRoom = () => {
  const [currentChat, setCurrentChat] = useState(ChatDatas[0]);
  const [friendList, setFriendList] = useState([]);
  const [chatRoomInfo, setChatRoomInfo] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resFriendList = await axios.get('/getProfile/friendList');
        const resChatRoomInfo = await axios.get('/message/find/4');
        setFriendList(resFriendList.data);
        console.log(resChatRoomInfo);
        setChatRoomInfo(resChatRoomInfo.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log('friendList', friendList);
  console.log('chatRoomInfo', chatRoomInfo);

  return (
    <>
      <SideNav />
      <div className='container-fluid'>
        <div className='row chatroom-main'>
          <div className='col-3 bg-secondary chatroom-list'>
            <MessageBar chats={ChatDatas} setCurrentChat={setCurrentChat} friendList={friendList} />
          </div>
          <div className='col-9 text-white p-0'>
            <Chat currentChat={currentChat} friendList={friendList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
