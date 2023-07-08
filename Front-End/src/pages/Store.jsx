import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreCarousels from '../component/Store/StoreCarousels';
import '../styles/component/bdGradient.scss';
import '../styles/store.scss';

function Store() {
  const [prices, setPrices] = useState([]);
  const [selected, setSelected] = useState(null); // 新增 selected 狀態

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get('/items')
      .then((response) => {
        console.log(response);
        setPrices(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRadioChange = (event) => {
    setSelected(event.target.value); // 更新選擇的值
    console.log(event.target.value);
  };

  console.log(handleRadioChange);

  const handleButtonClick = () => {
    if (selected) {
      const selectedItem = prices.find((item) => item.id === Number(selected));
      const itemId = selectedItem.id;
      console.log(itemId);

      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Cookie'] = cookie.parse(document.cookie); // 设置请求头的Cookie
      axios
        .post('/orders', { itemId: itemId }) // 發送POST請求
        .then((response) => {
          const data = response.data;
          console.error({ itemId: itemId });
          const blob = new Blob([data], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          window.open(url); // 在新窗口中打開URL
        })
        .catch((error) => {
          console.error(error);
          console.error({ itemId: itemId });
        });
    }
  };

  // // 將所選的訂閱項目和價格發送到後端
  // const handleSubscription = (itemName, price) => {
  //   console.log(`Selected: ${itemName} - $${price}`);
  // };

  return (
    <section className='container mt-4'>
      <section className='row d-flex '>
        <StoreCarousels />
      </section>
      <section className='row d-flex  p-3 justify-content-center'>
        <section
          className='row btn-group-vertical d-flex align-content: space-around;'
          role='group'
          aria-label='Vertical radio toggle button group'
        >
          {prices.map((item) => (
            <div
              key={item.id}
              // 檢查是否為選取的項目，添加 'selected' CSS class
              className='col-4 store-card m-3 d-flex p-0'
            >
              <input
                type='radio'
                className='btn-check'
                name='btn-radio'
                id={`btn-radio${item.id}`}
                autoComplete='off'
                value={item.id} // 將選項的 ID 設為 value
                onChange={handleRadioChange}
              />
              <label
                className='btn h-100 d-flex align-items-center'
                htmlFor={`btn-radio${item.id}`}
              >
                <div>
                  <h4>{item.itemName}</h4>
                  <h4 className='store-price'> ${item.price}</h4>
                </div>
              </label>
            </div>
          ))}
        </section>
      </section>
      <div className='row d-flex justify-content-center'>
        <button
          type='button'
          className='col-2 btn-lg btn btn-primary text-white'
          onClick={handleButtonClick}
        >
          立刻訂閱
        </button>
      </div>
    </section>
  );
}

export default Store;
