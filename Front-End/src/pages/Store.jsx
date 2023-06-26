import React from 'react';
import StoreCarousels from '../component/Store/StoreCarousels';
import StoreCard from '../component/Store/StoreCard';
import '../styles/component/bdGradient.scss';
import '../styles/store.scss';

function Store() {
  return (
    <>
      <section className='container mt-4'>
        <section className='row d-flex '>
          <StoreCarousels />
        </section>
        <section className='row d-flex mt-4 p-3 justify-content-center'>
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </section>
        <div className='row d-flex justify-content-center'>
          <button type='button' className='col-2 btn-lg btn btn-primary text-white mt-2'>
            立刻訂閱
          </button>
        </div>
      </section>
    </>
  );
}

export default Store;
