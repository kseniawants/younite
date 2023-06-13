// 搜尋框
import React from 'react'
import '../../styles/all.scss'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Search = () => {
  return (
    <div className="">
      <div className="mx-3">
        <Input size="large" placeholder="搜尋" prefix={<SearchOutlined />}  className='border-0 rounded-pill' style={{outline: 'none', height:'40px'}}/>
      </div>
      <div className='mt-2 p-2 d-flex align-items-center gap-2 ' id='userChat' style={{ cursor: 'pointer' }}>
        <img className='rounded-circle bg-dark' style={{height: '50px', width:'50px' , objectFit: 'cover'}} src="" alt="" />
        <div>
            <span style={{fontSize:'18px'}}>David</span>
        </div>
      </div>
    </div>
  )
}

export default Search
