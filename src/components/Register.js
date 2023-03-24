import React from 'react';
import InfoTooltip from './InfoTooltip';
import SignForm from './SignForm';

export default function Register() {
  return (
    <>
      <SignForm
        title={'Регистрация'}
        formType={'sign-up'}
        btnTxt={'Зарегистрироваться'}
        isRegistrationForm={true}
      />
      <InfoTooltip />
    </>
  )
}
