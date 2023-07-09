import React, { useState } from 'react';
import FilterModal from '../component/Modal/FilterModal';
import '../styles/component/bdGradient.scss';

const ShowMore = () => {
  const [openModal, setOpenModal] = useState(false); // Model 開關
  const [fadeInModal, setFadeInModal] = useState(false); // 追蹤是否需要淡入

  const handleModalClick = () => {
    setOpenModal(true);
    setFadeInModal(true); //設置淡入為 true，觸發淡入效果
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <section className='container'>
      <section className='bg-pageMain row d-flex'>
        <div className='bg-pageTitle d-flex'>
          <button
            type='button'
            className='btn btn-primary btn-sm text-white'
            onClick={handleModalClick}
          >
            <i className='fa-solid fa-filter me-1' size='sm'></i>篩選
          </button>
        </div>
      </section>
      {openModal && <FilterModal closeModal={handleCloseModal} fadeIn={fadeInModal} />}
    </section>
  );
};

export default ShowMore;
