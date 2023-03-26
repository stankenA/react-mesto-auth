import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utilis/auth';
import { useForm } from '../hooks/useForm';

export default function Login({ handleLogin }) {

  const navigate = useNavigate();

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.password || !values.email) {
      return;
    }
    auth.authorize(values.password, values.email)
      .then((data) => {
        if (data.token) {
          setValues({ email: '', password: '' });
          handleLogin();
          navigate('/', { replace: true });
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <SignForm
      title={'Вход'}
      formType={'sign-in'}
      btnTxt={'Войти'}
      isRegistrationForm={false}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
