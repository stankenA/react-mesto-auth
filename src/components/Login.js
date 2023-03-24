import React from 'react';
import SignForm from './SignForm';

export default function Login() {
  return (
    <SignForm
      title={'Вход'}
      formType={'sign-in'}
      btnTxt={'Войти'}
      isRegistrationForm={false}
    />
  )
}
