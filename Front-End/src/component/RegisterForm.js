import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './FormElements';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  
  const onSubmit = async () => {
    try {
      setSubmitting(true);
      navigate('/personal');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  
  const password = watch('password');

  return (
    <div className='container p-0'>
      <div className='bg-light vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='shadow rounded-3 bg-light bg-opacity-25 p-3'
            style={{ zIndex: '1' }}
          >
            <h4 className='fw-bold text-center'>註冊</h4>
            <div
              className='bg-secondary px-4 py-3 rounded-3 w-35'
              // style={{ width: '495px', height: '610px' }}
            >
              <div className='mb-1'>
                <Input
                  id='name'
                  type='text'
                  errors={errors}
                  labelText='帳號名稱'
                  placeholder='輸入帳號名稱'
                  register={register}
                  rules={{
                    required: '帳號名稱為必填',
                  }}
                ></Input>
              </div>
              <div className='mb-1'>
                <Input
                  id='email'
                  labelText='信箱'
                  type='email'
                  placeholder='輸入信箱'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '信箱為必填',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: '信箱格式不正確',
                    },
                  }}
                ></Input>
              </div>
              <div className='mb-1'>
                <Input
                  id='password'
                  labelText='密碼'
                  type='password'
                  placeholder='輸入密碼'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '密碼為必填',
                    minLength: {
                      value: 6,
                      message: '密碼長度不少於 6',
                    },
                  }}
                ></Input>
              </div>
              <div className='mb-1'>
                <Input
                  id='confirmPassword'
                  labelText='確認密碼'
                  type='password'
                  placeholder='確認密碼'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '確認密碼為必填',
                    minLength: {
                      value: 6,
                      message: '確認密碼長度不少於 6',
                    },
                  validate: (value) => value === password || '密碼不符合',
                  }}
                ></Input>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <Link to='/personal'>
                  <button
                    type='submit'
                    className='btn btn-primary py-3 px-7 rounded-2 d-flex align-items-center justify-content-center'
                    disabled={submitting}
                    style={{ color: '#fff', width: '113px', height: '38px' }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    {submitting ? '正在註冊...' : '註冊'}
                  </button>
                </Link>
              </div>
              <div className='pt-3 pb-1 d-flex flex-column align-items-center justify-content-center'>
                <LoginSocialGoogle
                  client_id={
                    ''
                  }
                  scope='openid profile email'
                  discoveryDocs='claims_supported'
                  access_type='offline'
                  onResolve={({ provider, data }) => {
                    console.log(provider, data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <GoogleLoginButton
                    className='mt-2 d-flex justify-content-center'
                    style={{ width: '396px', height: '40px' }}
                  >
                    <span className='fs-6 fw-light'>使用 Google 帳戶註冊</span>
                  </GoogleLoginButton>
                </LoginSocialGoogle>
                <LoginSocialFacebook
                  appId='672335331385748'
                  onResolve={(response) => {
                    console.log(response);
                  }}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton
                    className='mt-2 d-flex justify-content-center'
                    style={{ width: '396px', height: '40px' }}
                  >
                    <span className='fs-6 fw-light'>使用facebook帳戶註冊</span>
                  </FacebookLoginButton>
                </LoginSocialFacebook>
              </div>
              <div className='text-dark text-center fw-normal'>
                <span>已經有帳號了嗎? </span>
                <Link to='/login'>
                  <span>登入</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
