import React from 'react';
import Info from '../component/Info';

const PersonalInfo = () => {
  return (
    <div className='bg-secondary'>
      <div className='d-flex justify-content-center py-5'>
        <h3>建立帳號</h3>
      </div>
      <Info />
      <div className='d-flex flex-column-reverse flex-md-row py-4 justify-content-center align-items-md-center align-items-end w-100'>
        <button type='submit' className='btn btn-primary rounded text-white'>
          送出表單
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
