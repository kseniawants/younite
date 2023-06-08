import React, { useState } from 'react'
import { Button, Form, Input, DatePicker, Radio, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import "./Icons.js"
import "../styles/Nav.css"
import Dategoal from './Dategoal.js';
import Hobby from './Hobby.js';

const layout = {
  wrapperCol: {
    span: 6,
  },
};

// 用於定義驗證錯誤時的錯誤訊息
const validateMessages = {
  required: '${label} is required!',
  // types: {
  //   email: '${label} is not a valid email!',
  //   number: '${label} is not a valid number!',
  // },
  // number: {
  //   range: '${label} must be between ${min} and ${max}',
  // },
};

const Info = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHobbyModalOpen, setIsHobbyModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const showHobbyModal = () => {
    setIsHobbyModalOpen(true);
  };
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleHobbyOk = () => {
    setIsHobbyModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const handleHobbyCancel = () => {
    setIsHobbyModalOpen(false);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="myForm" >
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon="user" />
          <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true }]}>
          </Form.Item>
        </div>
        <Input style={{width: '200px' , borderRadius: '8px',}}/>
      </div>
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon="cake-candles" />
          <Form.Item name={['user', 'birthday']} label="生日" rules={[{ required: true }, ]} />
        </div>
        <DatePicker style={{width: '150px', borderRadius: '8px',}}/>
      </div>
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon="fa-venus-mars" />
          <Form.Item name={['user', 'age']} label="性別" rules={[{ required: true  },]}/>
        </div>
        <Radio.Group defaultValue="a" buttonStyle="solid" style={{width: '200px', }}>
          <Radio.Button value="a">男生</Radio.Button>
          <Radio.Button value="b">女生</Radio.Button>
          <Radio.Button value="c">其他</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon="transgender" />
          <Form.Item name={['user', 'website']} label="性向" rules={[{ required: true  },]} />
          
        </div>
        <Radio.Group defaultValue="a" buttonStyle="solid" style={{width: '220px', }}>
          <Radio.Button value="a">生理男</Radio.Button>
          <Radio.Button value="b">生理女</Radio.Button>
          <Radio.Button value="c">雙性戀</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon="users" />
          <Form.Item name={['user', 'age']} label="顯示給我看" rules={[{ required: true  },]}/>
        </div>
        <Radio.Group defaultValue="a" buttonStyle="solid" style={{width: '200px', }}>
          <Radio.Button value="a">男生</Radio.Button>
          <Radio.Button value="b">女生</Radio.Button>
          <Radio.Button value="c">所有人</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ display: 'flex' }}>
        <div >
          <div className="formItem">
            <FontAwesomeIcon icon="magnifying-glass"/>
            <Form.Item name={['user', 'name']} label="我想找尋" rules={[{ required: true }]}/>
          </div>
          <Button type="dashed" danger onClick={showModal}>
            +新增好友目標
          </Button>
          <Dategoal isOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
        </div>  
        <div style={{ paddingLeft: '40px' }}>
          <div className="formItem">
            <FontAwesomeIcon icon="location-dot" />
            <Form.Item name={['user', 'name']} label="出沒地點" rules={[{ required: true }]}/>
          </div>
          <Button type="dashed" danger>
            +地點
          </Button>
        </div>  
      </div>
      <div style={{ width: '560px' }}>
        <Divider>選填</Divider>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <div className="formItem">
            <FontAwesomeIcon icon="wand-magic-sparkles" />
            <Form.Item name={['user', 'name']} label="興趣" />
          </div>
          <Button type="dashed" danger onClick={showHobbyModal}>
            +新增興趣
          </Button>
          <Hobby isOpen={isHobbyModalOpen} onOk={handleHobbyOk} onCancel={handleHobbyCancel} />
        </div> 
        <div style={{ paddingLeft: '70px' }}>
          <div className="formItem">
            <FontAwesomeIcon icon="volume-low" />
            <Form.Item name={['user', 'name']} label="語音自我介紹" />
          </div>
          <Button type="dashed" danger>
            <FontAwesomeIcon icon="volume-high" />....
          </Button>
        </div> 
      </div>
      <div>
        <div className="formItem">
          <FontAwesomeIcon icon={faPenToSquare} />
          <Form.Item name={['user', 'introduction']} label="文字自我介紹" />
        </div>
        <Input.TextArea />
      </div>
      <br />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Info
