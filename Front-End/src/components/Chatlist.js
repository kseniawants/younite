import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icons';
import Chatbox from './Charbox'

const Chatlist = () => {

  const users = [
    {
      id: 1,
      name: 'Lisa',
      time: '3min ago',
      message: 'Hey, how’s your day?',
    },
    {
      id: 2,
      name: 'Jisoo',
      time: '21min ago',
      message: 'Have a nice weekend.',
    },
    {
      id: 3,
      name: 'Rose',
      time: '40min ago',
      message: 'What type of clothes do you like to wear?',
    },
    {
      id: 4,
      name: 'Jennie',
      time: '1hour ago',
      message: 'Come on, you can do that.',
    },
    {
      id: 5,
      name: 'yuqi',
      time: '2hour ago',
      message: 'I have no other choice.',
    }
  ]

  return (
    <div className='chatList'>
      <h3>對話</h3>
      <p>好友人數:10/25</p>
      <div className="searchWrapper">
        <FontAwesomeIcon icon="magnifying-glass" className="searchIcon"/>
        <input className="searchInput" type="text" placeholder="         搜尋" />
      </div>
      <div style={{overflow: 'auto',}}>
      {
        users.map((user) =>{
          return <Chatbox key={user.id} name={user.name} time={user.time} message={user.message}/>
        })
      }
      </div>
    </div>
  )
}

export default Chatlist
