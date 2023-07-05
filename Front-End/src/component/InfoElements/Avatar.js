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

  const handleBeforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isImage) {
      message.error('只能上传图片文件！');
    }

    if (!isLt2M) {
      message.error('图片文件大小不能超过2MB！');
    }

    return isImage && isLt2M;
  };

  const handleCustomRequest = (options) => {
    const {  onSuccess, onProgress } = options;

    // 自定义上传逻辑
    // 将文件上传到指定位置，并在上传过程中更新进度和状态

    // 示例：模拟上传进度
    const total = 100;
    let uploaded = 0;

    const uploadInterval = setInterval(() => {
      uploaded += 10;
      onProgress({ percent: uploaded });

      if (uploaded >= total) {
        clearInterval(uploadInterval);
        onSuccess(); // 上传成功
      }
    }, 500);

    // 示例：模拟上传失败
    // setTimeout(() => {
    //   clearInterval(uploadInterval);
    //   onError(new Error('上传失败'));
    // }, 2000);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        beforeUpload={handleBeforeUpload}
        customRequest={handleCustomRequest}
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
