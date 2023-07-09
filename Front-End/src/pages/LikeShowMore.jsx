import React from 'react'

const LikeShowMore = () => {
  return (
    <div className='bg-pageTitle d-flex'>
        <h6>你可能喜歡</h6>
        <button type='button' className='btn btn-primary btn-sm text-white'>
            <i className='fa-solid fa-filter me-1' size='sm'></i>篩選
        </button>
    </div>
  )
}

export default LikeShowMore
