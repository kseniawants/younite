import React from 'react';
import '../styles/component/bdGradient.scss';
import '../styles/home.scss';
import PeoplePhoto from '../component/User/PeoplePhoto';
import UserCard from '../component/User/UserCard';

function Home() {
  return (
    <>
      <section className='container'>
        <section className='bg-pageMain row d-flex'>
          <div className='bg-pageTitle d-flex'>
            <h6>你可能喜歡</h6>
            <button type='button' className='btn btn-primary btn-sm text-white'>
              <i className='fa-solid fa-filter me-1' size='sm'></i>篩選
            </button>
          </div>
          <div className='bg-pagePhoto d-flex mt-3 mb-3'>
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
          </div>
          <div className='bg-pageMore d-flex'>
            <a href=''>顯示更多...</a>
          </div>
        </section>
        <section className='row justify-content-between mt-3'>
          <div className='bg-pageMain col me-3'>
            <h6>你可能喜歡</h6>
            <UserCard />
            <UserCard />
            <UserCard />
            <div className='bg-pageMore d-flex mt-3'>
              <a href=''>顯示更多...</a>
            </div>
          </div>
          <div className='bg-pageMain col'>
            <i className='fa-solid fa-user-lock'></i>
            <h6>誰喜歡你</h6>
            <div className='user-lock'>
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </div>
          <div className='bg-pageMain col ms-3'>
            <h6>類似職業</h6>
            <UserCard />
            <UserCard />
            <UserCard />
            <div className='bg-pageMore d-flex mt-3'>
              <a href=''>顯示更多...</a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
