import React, { useState } from 'react';
import FilterModal from '../component/Modal/FilterModal';

const LikeShowMore = () => {
  const [openModal, setOpenModal] = useState(false); // Model 開關
  const [fadeInModal, setFadeInModal] = useState(false); // 追蹤是否需要淡入

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleModalClick = () => {
    setOpenModal(true);
    setFadeInModal(true); //設置淡入為 true，觸發淡入效果
  };

  return (
    <>
      <div className='bg-pageTitle d-flex'>
        <h6>你可能喜歡</h6>
        <button
          type='button'
          className='btn btn-primary btn-sm text-white'
          onClick={handleModalClick}
        >
          <i className='fa-solid fa-filter me-1' size='sm'></i>篩選
        </button>
      </div>
      {openModal && <FilterModal closeModal={handleCloseModal} fadeIn={fadeInModal} />}
    </>
  );
};

export default LikeShowMore;
