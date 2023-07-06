import React, { useState } from 'react';
import '../styles/component/bdGradient.scss';
import '../styles/all.scss';
import { useForm, Controller } from 'react-hook-form';
import { Input, RadioButtonGroup } from '../component/FormElements';
import { DatePicker, Button, Divider } from 'antd';
import Hobbies from '../component/InfoElements/Hobbies';
import Avatar from '../component/InfoElements/Avatar';
import PhotoWall from '../component/InfoElements/PhotoWall';

function SettingPersonal() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = async () => {
    try {
      setSubmitting(true);
      // navigate('/src/pages/PersonalInfo.jsx');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const radioGender = [
    { label: '男生', value: 'male' },
    { label: '女生', value: 'female' },
    { label: '其他', value: 'other' },
  ];

  const radioSO = [
    { label: '生理男', value: 'man' },
    { label: '生理女', value: 'woman' },
    { label: '雙性戀', value: 'bisexual' },
  ];

  const radioShow = [
    { label: '男生', value: 'men' },
    { label: '女生', value: 'women' },
    { label: '所有人', value: 'all' },
  ];

  return (
    <>
      <section className='container'>
        <section className='bg-pageMain row d-flex'>
          <div className='bg-pageTitle d-flex'>
            <div className='container'>
              <form className='row justify-content-center flex-md-row flex-column-reverse'>
                <div className='col-md-5'>
                  <div className='pb-4 w-50'>
                    <i className='fa-solid fa-user text-black' />
                    <span className='text-danger p-1'>*</span>
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
                    <i className='fa-solid fa-phone text-black' />
                    <span className='text-danger p-1'>*</span>
                    <Input
                      id='tel'
                      labelText='電話'
                      type='tel'
                      placeholder='輸入手機號碼'
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
                    <i className='fa-solid fa-cake-candles text-black'></i>
                    <span className='text-danger p-1'>*</span>
                    <label htmlFor=''>生日</label>
                    <br />
                    <Controller
                      control={control}
                      name='birthday'
                      rules={{ required: true }}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          placeholder='選擇生日'
                          className={`mt-2 shadow-sm ${errors.birthday && 'is-invalid'}`}
                        />
                      )}
                    />
                    {errors.birthday && <div className='invalid-feedback'>請選擇生日</div>}
                  </div>
                  <div className='pb-4'>
                    <i className='fa-solid fa-venus-mars text-black'></i>
                    <span className='text-danger p-1'>*</span>
                    <label>性別</label>
                    <br />
                    <RadioButtonGroup
                      name='radioGender'
                      options={radioGender}
                      register={register}
                      errors={errors}
                      rules={{
                        required: '請選擇性別',
                      }}
                    />
                  </div>
                  <div className='pb-4'>
                    <i className='fa-solid fa-transgender text-black'></i>
                    <span className='text-danger p-1'>*</span>
                    <label>性向</label>
                    <br />
                    <RadioButtonGroup
                      name='radioSO'
                      options={radioSO}
                      register={register}
                      errors={errors}
                      rules={{
                        required: '請選擇性向',
                      }}
                    />
                  </div>
                  <div className='pb-4'>
                    <i className='fa-solid fa-users text-black'></i>
                    <span className='text-danger p-1'>*</span>
                    <label>顯示給我看</label>
                    <br />
                    <RadioButtonGroup
                      name='radioShow'
                      options={radioShow}
                      register={register}
                      errors={errors}
                      rules={{
                        required: '顯示給我看為必填',
                      }}
                    />
                  </div>
                  <div className='pb-4'>
                    <i className='fa-solid fa-heart-circle-plus text-black'></i>
                    <span className='text-danger p-1'>*</span>
                    <label className='mb-2'>興趣</label>
                    <br />
                    <Hobbies />
                  </div>
                  <div className='d-flex pb-4'>
                    <div className='mb-2 pe-5'>
                      <i className='fa-solid fa-magnifying-glass text-black'></i>
                      <span className='text-danger p-1'>*</span>
                      <label className='mb-2'>我想找尋</label>
                      <br />
                      <Controller
                        control={control}
                        name='goal'
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Button
                            type='dashed'
                            {...field}
                            className={` ${errors.goal && 'is-invalid'}`}
                          >
                            +新增交友目標
                          </Button>
                        )}
                      />
                      {errors.goal && <div className='invalid-feedback'>請選擇交友目標</div>}
                    </div>
                    <div className='mb-2 ps-4'>
                      <i className='fa-solid fa-location-dot text-black'></i>
                      <span className='text-danger p-1'>*</span>
                      <label className='mb-2'>出沒地點</label>
                      <br />
                      <Controller
                        control={control}
                        name='address'
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Button
                            type='dashed'
                            {...field}
                            className={` ${errors.address && 'is-invalid'}`}
                          >
                            +地點
                          </Button>
                        )}
                      />
                      {errors.address && <div className='invalid-feedback'>請選擇地點</div>}
                    </div>
                  </div>
                  <Divider plain style={{ color: '#BBBBBB' }}>
                    選填
                  </Divider>

                  <div className='pb-4'>
                    <i className='fa-solid fa-volume-low text-black pe-2'></i>
                    <label className='mb-2'>語音自我介紹</label>
                    <br />
                    <Button type='dashed d-flex col align-items-center'>
                      <i className='fa-solid fa-volume-high text-black pe-1'></i>
                      <div
                        className='circle rounded-circle me-1'
                        style={{ backgroundColor: '#D3D3D3', width: '4px', height: '4px' }}
                      ></div>
                      <div
                        className='circle rounded-circle me-1'
                        style={{ backgroundColor: '#D3D3D3', width: '4px', height: '4px' }}
                      ></div>
                      <div
                        className='circle rounded-circle me-1'
                        style={{ backgroundColor: '#D3D3D3', width: '4px', height: '4px' }}
                      ></div>
                    </Button>
                  </div>
                  <div className='pb-4'>
                    <i className='fa-solid fa-pen-to-square text-black pe-2' />
                    <label htmlFor='exampleFormControlTextarea1' className='form-label mb-2'>
                      文字自我介紹
                    </label>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows='3'
                    ></textarea>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='p-4 mb-4'>
                    <label className='mb-4'>大頭貼照片</label>
                    <Avatar />
                  </div>
                  <div className='p-4 mb-4'>
                    <label className='mb-4'>個人檔案照片</label>
                    <PhotoWall />
                  </div>
                </div>
              </form>
              <div className='d-flex flex-column-reverse flex-md-row py-4 justify-content-center align-items-md-center align-items-center w-100'>
                <button
                  type='submit'
                  className='btn btn-primary rounded text-white'
                  disabled={submitting}
                  onClick={handleSubmit(onSubmit)}
                >
                  {submitting ? '正在送出表單...' : '送出表單'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default SettingPersonal;
