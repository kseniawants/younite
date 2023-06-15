import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/component/bdGradient.scss';
import PeoplePhoto from '../component/User/PeoplePhoto';

function Home() {
  return (
    <>
      <div className='bg-pageMain'>
        <div className='bg-pageTitle'>
          <h5>你可能喜歡</h5>
          <Button>
            <i className='fa-solid fa-filter text-white'> 篩選</i>
          </Button>
        </div>
        <div className='bg-pagePhoto'>
          <PeoplePhoto />
          <PeoplePhoto />
          <PeoplePhoto />
          <PeoplePhoto />
          <PeoplePhoto />
          <PeoplePhoto />
        </div>
        <div className='bg-pageMore'>
          <a href=''>顯示更多...</a>
        </div>
      </div>
      <div className='homPageBottom'>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
        <div className='bg-pageBottomCard'>
          <h6>你可能喜歡</h6>
        </div>
      </div>
    </>
  );
}

export default Home;
