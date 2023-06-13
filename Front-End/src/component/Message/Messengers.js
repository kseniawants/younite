// 聊天好友
import React from 'react'
import '../../styles/all.scss'

const Messengers = () => {
  return (
    <div>
      <div className='p-2 d-flex align-items-center gap-2 ' id='userChat' style={{ cursor: 'pointer' }}>
        <img className='rounded-circle bg-dark' style={{height: '50px', width:'50px' , objectFit: 'cover'}} src="" alt="" />
        <div>
            <span style={{fontSize:'18px'}}>David</span>
            <p style={{fontSize:'14px', color:'#949494'}}>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Messengers
