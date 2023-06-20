import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './FormElements';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
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

      // const { name, email, tel, password, confirmPassword } = data;
      // Perform form submission operations
      // ...
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
    <div className='container p-0'>
      <div className='bg-light vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='shadow rounded-3 bg-light bg-opacity-25 p-3'
            style={{ zIndex: '1' }}
          >
            <h4 className='fw-bold text-center'>登入</h4>
            <div
              className='bg-secondary px-4 py-3 rounded-3 w-35'
              // style={{ width: '495px', height: '610px' }}
            >
              <div className='mb-1'>
                <Input
                  id='name'
                  type='text'
                  errors={errors}
                  labelText='使用者帳號/信箱/手機號碼'
                  placeholder='輸入使用者帳號/信箱/手機號碼'
                  register={register}
                  rules={{
                    required: '使用者帳號/信箱/手機號碼為必填',
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
              <div className='d-flex justify-content-center mt-4'>
                <button
                  type='submit'
                  className='btn btn-primary py-3 px-7 rounded-2 d-flex align-items-center justify-content-center'
                  disabled={submitting}
                  style={{ color: '#fff', width: '113px', height: '38px' }}
                >
                  {submitting ? '正在登入...' : '登入'}
                </button>
              </div>
              <div className='pt-3 pb-1 d-flex flex-column align-items-center justify-content-center'>
                <GoogleOAuthProvider clientId='234241802651-ngs8vhu4c0d2u72nmot9kbt799scpoh9.apps.googleusercontent.com'>
                  <GoogleLogin
                    // className='w-100%'
                    theme='outline'
                    logo_alignment='center'
                    width='396px'
                    size='large'
                    shape='rectangular'
                    text='Login with Google'
                    context='login'
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
                    <span className='fs-6 fw-light'>使用facebook帳戶登入</span>
                  </FacebookLoginButton>
                </LoginSocialFacebook>
              </div>
              <div className='text-dark text-center fw-normal'>
                <span>還沒有帳號? </span>
                <Link to='/register'>
                  <span>立即註冊</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
