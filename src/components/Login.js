import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utilis/auth'

export default function Login({ handleLogin }) {

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!formValue.password || !formValue.email) {
      return;
    }
    auth.authorize(formValue.password, formValue.email)
      .then((data) => {
        if (data.token) {
          setFormValue({ email: '', password: '' });
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
