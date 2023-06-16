import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/component/bdGradient.scss';
import '../styles/home.scss';
import PeoplePhoto from '../component/User/PeoplePhoto';

function Home() {
  return (
    <>
      <section className='bg-pageMain row d-flex'>
        <div className='bg-pageTitle d-flex'>
          <h5>你可能喜歡</h5>
          <Button>
            <i className='fa-solid fa-filter text-white'> 篩選</i>
          </Button>
        </div>
        <div className='bg-pagePhoto d-flex'>
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
      <section className='homPageBottom'>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
      </section>
    </>
  );
}

export default Home;
