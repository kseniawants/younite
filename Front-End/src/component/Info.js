import React, { useState } from 'react';
import '../styles/all.scss';
import { useForm } from 'react-hook-form';
import { Input  } from './FormElements';
import { DatePicker, Button, Divider } from 'antd';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Hobbies from './Hobbies';

function Info() {
    const {
      register,
      formState: { errors },
    } = useForm({
      mode: 'onTouched',
    });

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const [radioValue, setRadioValue] = useState('');
    const [orientationValue, setOrientationValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const radios = [
        { name: '男生', value: 'boy' },
        { name: '女生', value: 'girl' },
        { name: '其他', value: 'other' },
        { name: '生理男', value: 'man' },
        { name: '生理女', value: 'woman' },
        { name: '雙性戀', value: 'bisexual' },
        { name: '所有人', value: 'all' },
    ];

  return (
    <div className='container'>
    <form className='row justify-content-center flex-md-row flex-column-reverse'>
      <div className='col-md-5' >
        <div className='pb-4 w-50'>
          <i className="fa-solid fa-user text-black"/>
          <span className="text-danger p-1">*</span>
          <Input
            id='name'
            labelText='姓名'
            type='text'
            placeholder='輸入姓名'
            errors={errors}
            register={register}
            rules={{
              required: '姓名為必填',
            }}
            
          ></Input>
        </div>
        <div className='pb-4 w-50'>
          <i className="fa-solid fa-phone text-black"/>
          <span className="text-danger p-1">*</span>
          <Input
            id='tel'
            labelText='電話'
            type='tel'
            errors={errors}
            register={register}
            rules={{
              required: '電話為必填',
              pattern: {
                value: /^[0-9]{10}$/,
                message: '電話必須是 10 位數字',
              },
            }}
          ></Input>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-cake-candles text-black"></i>
          <span className="text-danger p-1">*</span>
          <label htmlFor="">生日</label>
          <br />
          <DatePicker onChange={onChange} placeholder="選擇生日" className='mt-2 shadow-sm'/>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-venus-mars text-black"></i>
          <span className="text-danger p-1">*</span>
          <label>性別</label>
          <br />
          <ButtonGroup>
            {radios.slice(0, 3).map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-gender-${idx}`}
                type="radio"
                variant={'outline-radio'}
                name="radio-gender"
                className='mt-2 me-4 px-4 rounded shadow-sm bg-white'
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-transgender text-black"></i>
          <span className="text-danger p-1">*</span>
          <label>性向</label>
          <br />
          <ButtonGroup>
            {radios.slice(3, 6).map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-orientation-${idx}`}
                type="radio"
                variant={'outline-radio'}
                name="radio-orientation"
                className='mt-2 me-4 px-3 rounded shadow-sm bg-white'
                value={radio.value}
                checked={orientationValue === radio.value}
                onChange={(e) => setOrientationValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-users text-black"></i>
          <span className="text-danger p-1">*</span>
          <label>顯示給我看</label>
          <br />
          <ButtonGroup>
            {radios.filter((radio, idx) => [0, 1, 6].includes(idx)).map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-display-${idx}`}
                type="radio"
                variant={'outline-radio'}
                name="radio-display"
                className='mt-2 me-4 px-4 rounded shadow-sm bg-white'
                value={radio.value}
                checked={displayValue === radio.value}
                onChange={(e) => setDisplayValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-heart-circle-plus text-black"></i>
          <span className="text-danger p-1">*</span>
          <label className='mb-2'>興趣</label>
          <br />
          <Hobbies/>
        </div>
        <div className='d-flex pb-4'>
          <div className='mb-2 pe-5'>
            <i className="fa-solid fa-magnifying-glass text-black"></i>
            <span className="text-danger p-1">*</span>
            <label className='mb-2' >我想找尋</label>
            <br />
            <Button type="dashed" >
                +新增交友目標
            </Button>
          </div>
          <div className='mb-2 ps-5'>
            <i className="fa-solid fa-location-dot text-black"></i>
            <span className="text-danger p-1">*</span>
            <label className='mb-2'>出沒地點</label>
            <br />
            <Button type="dashed" >
                +地點
            </Button>
          </div>
        </div>
        <Divider plain style={{color: '#BBBBBB'}}>選填</Divider>
        
        <div className='pb-4'>
          <i className="fa-solid fa-volume-low text-black pe-2"></i>
          <label className='mb-2'>語音自我介紹</label>
          <br />
          <Button type="dashed d-flex col align-items-center" >
            <i className="fa-solid fa-volume-high text-black pe-1"></i>
            <div className='circle rounded-circle me-1' style={{backgroundColor:"#D3D3D3", width:"4px", height:"4px"}}></div>
            <div className='circle rounded-circle me-1' style={{backgroundColor:"#D3D3D3", width:"4px", height:"4px"}}></div>
            <div className='circle rounded-circle me-1' style={{backgroundColor:"#D3D3D3", width:"4px", height:"4px"}}></div>
          </Button>
        </div>
        <div className='pb-4'>
          <i className="fa-solid fa-pen-to-square text-black pe-2"/>
          <label htmlFor="exampleFormControlTextarea1" className="form-label mb-2">文字自我介紹</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <div className='col-md-5'>
        <div className='p-4 mb-4'>
          <label className='mb-4'>大頭貼照片</label>
        </div>
        <div className='p-4 mb-4'>
          <label className='mb-4'>個人檔案照片</label>
        </div>
      </div>
    </form>
    </div>
  );
}


export default Info;

