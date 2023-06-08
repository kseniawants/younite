import React from 'react'
import './Icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Row, Col } from 'antd';
  
  
const Charbox = (props) => {
  return (
    <div className= 'boxStyle'>
      <Row align="top">
        <Col>
          <Space>
            <Badge count={1}>
              <Avatar shape="circle" icon={<UserOutlined />} size={48}/>
            </Badge>
          </Space>
        </Col>
        <Col>
          <div className= 'boxFont'>
            <h3>{props.name}</h3>
            <p>Online</p>
          </div>
        </Col>
        <Col>
            <p>{props.time}</p>
        </Col>
      </Row>
      <p>{props.message}</p>
    </div>
  )
}

export default Charbox

