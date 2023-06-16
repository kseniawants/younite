import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './FormElements';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link, useNavigate  } from 'react-router-dom';

function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = async () => {
    try {
      setSubmitting(true);
      navigate('/src/pages/PersonalInfo.jsx');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className='bg-light full-height'>
      <div className='container vh-100 vw-50 d-flex'>
        <div className='row  justify-content-center align-items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='shadow py-3 px-4 rounded-3 justify-content-center align-items-center bg-light bg-opacity-25'
            style={{ zIndex: '1' }}
          >
            <h4 className='fw-bold text-center '>註冊</h4>
            <div
              className='bg-secondary px-4 py-3 rounded-3'
              style={{ width: '495px', height: '610px' }}
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
              {/* <div className='mb-1'>
                <Input
                  id='tel'
                  labelText='手機號碼'
                  type='tel'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '手機號碼為必填',
                    minLength: {
                      value: 6,
                      message: '手機號碼不少於 6 碼',
                    },
                    maxLength: {
                      value: 12,
                      message: '手機號碼不超過 12 碼',
                    },
                  }}
                ></Input>
              </div> */}
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
                  }}
                ></Input>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <Link to='/src/pages/PersonalInfo.jsx' >
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
                <GoogleOAuthProvider clientId="234241802651-ngs8vhu4c0d2u72nmot9kbt799scpoh9.apps.googleusercontent.com">
                  <GoogleLogin
                    // className='w-100%'
                    theme='outline'
                    logo_alignment='center'
                    width='396px'
                    size='large'
                    shape='rectangular'
                    text='signup_with'
                    context='signup'
                    onSuccess={responseMessage}
                    onError={errorMessage}
                  />
                </GoogleOAuthProvider>
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
                <Link to='/src/pages/Login.jsx' >
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
