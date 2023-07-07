import React, {useState} from 'react';
import StoreCarousels from '../component/Store/StoreCarousels';
import StoreCard from '../component/Store/StoreCard';
import '../styles/component/bdGradient.scss';
import '../styles/store.scss';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

function Store() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId, buttonLabel) => {
    console.log('選擇的目標:', buttonLabel);
    setSelectedButton(buttonId); // 更新选中状态
  };

  return (
    <>
      <section className='container mt-4'>
        <section className='row d-flex '>
          <StoreCarousels />
        </section>
        <section className='row d-flex mt-4 p-3 justify-content-center'>
        <ButtonToolbar
              aria-label='Toolbar with button groups'
              className='d-flex justify-content-center my-3 container-fluid'
            >
              <div className='mb-2 row'>
                <ButtonGroup className='col-4' aria-label='First group'>
                  <Button
                    variant={selectedButton === 'btnradio1' ? 'outline-primary' : 'outline-radio'}
                    onClick={() => handleButtonClick('btnradio1', '長期伴侶')}
                    autoComplete='off'
                    className='btnradio'
                  >
                    <StoreCard/>
                  </Button>
                </ButtonGroup>
                <ButtonGroup className='col-4' aria-label='Second group'>
                  <Button
                    variant={selectedButton === 'btnradio2' ? 'outline-primary' : 'outline-radio'}
                    onClick={() => handleButtonClick('btnradio2', '短期關係')}
                    autoComplete='off'
                    className='btnradio'
                  >
                    <span>短期關係</span>
                    <br />
                    <span>但不排斥長期</span>
                  </Button>
                </ButtonGroup>
                <ButtonGroup className='col-4' aria-label='Third group'>
                  <Button
                    variant={selectedButton === 'btnradio3' ? 'outline-primary' : 'outline-radio'}
                    onClick={() => handleButtonClick('btnradio3', '長期關係')}
                    autoComplete='off'
                    className='btnradio'
                  >
                    <span>長期關係</span>
                    <br />
                    <span>但不排斥短期</span>
                  </Button>
                </ButtonGroup>
              </div>
          </ButtonToolbar>
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
