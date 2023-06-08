import React from "react";
import { Modal, Button } from "antd";
import Draggable from "react-draggable";

const Dategoal = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title={<h2 style={{ fontSize: "32px" }}>現在我想找尋...</h2>}
      className="modal"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      modalRender={(modal) => (
        <Draggable>
          <div>{modal}</div>
        </Draggable>
      )}
    >
        <p>分享答案，才能增加配對率!</p>
        <Button type="dashed" className='button'>
            <p>長期伴侶</p>
        </Button>
        <Button type="dashed" className='button'>
            <p>長期關係
              但不排斥短期</p>
        </Button>
        <Button type="dashed" className='button'>
            <p>短期關係
              但不排斥長期</p>
        </Button>
        <Button type="dashed" className='button'>
            <p>短暫的享樂</p>
        </Button>
        <Button type="dashed" className='button'>
            <p>新朋友</p>
        </Button>
        <Button type="dashed" className='button'>
            <p>我還在思考</p>
        </Button>
    </Modal>
  );
};

export default Dategoal;
