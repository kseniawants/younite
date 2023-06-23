import React from 'react';
import UserImage from '../../assets/images/sia.png';
import '../../styles/component/userCard.scss';

function UserCard() {
  return (
    <>
      <div className='user-card px-2 py-2 row'>
        <div className='col d-flex align-items-center'>
          <img src={UserImage} alt='Your Picture' className='mb-1 user-card-image' />
          <h6 className='ms-3'>Name</h6>
          <h6 className='ms-2 text-radio'>Age</h6>
        </div>

        <div className='row mt-1 justify-content-between text-nowrap'>
          <button type='button' className='btn btn-outline-primary btn-sm col m-1 rounded-pill '>
            # Primary
          </button>
          <button type='button' className='btn btn-outline-primary btn-sm col m-1 rounded-pill'>
            # Primary
          </button>
          <button type='button' className='btn btn-outline-primary btn-sm col m-1 rounded-pill'>
            # Primary
          </button>
          <span className='col text-radio'>...</span>
        </div>
      </div>
    </>
  );
}

export default UserCard;
