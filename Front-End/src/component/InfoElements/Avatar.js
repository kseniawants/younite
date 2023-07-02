import React, { useState } from 'react';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import PropTypes from 'prop-types';

const Avatar = ({ onFileChange }) => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    // },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    // 檢查新的檔案列表長度
    if (newFileList.length > 1) {
      // 提示錯誤訊息
      message.error('只能上傳一張照片');
      // 刪除多餘的檔案，只保留最新上傳的一張
      newFileList.splice(0, newFileList.length - 1);
    }

    setFileList(newFileList);
    onFileChange(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length === 0 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

Avatar.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

export default Avatar;
