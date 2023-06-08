import React from 'react';
import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';

const Hobby = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal   open={isOpen} onOk={onOk} onCancel={onCancel} modalRender={modal => (
        <Draggable>
          <div>{modal}</div>
        </Draggable>
      )}
    >
        <Button type="dashed" className='button'>
            壘球
        </Button>
        <Button type="dashed" className='button'>
            棒球
        </Button>
        <Button type="dashed" className='button'>
            足球
        </Button>
        <Button type="dashed" className='button'>
            桌球
        </Button>
        <Button type="dashed" className='button'>
            冰球
        </Button>
        <Button type="dashed" className='button'>
            手球
        </Button>
    </Modal>
  );
};

export default Hobby
