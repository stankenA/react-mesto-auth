import React, { useEffect } from 'react';
import SignForm from './SignForm';
import { useForm } from '../hooks/useForm';

export default function Register({ handleRegistration, isRegistrationSuccessfull }) {

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
  });

  // Очищаем поля формы, если регистрация прошла успешно
  // useEffect(() => {
  //   isRegistrationSuccessfull && setValues({ email: '', password: '' });
  // }, [isRegistrationSuccessfull])

  function handleSubmit(evt) {
    evt.preventDefault();

    handleRegistration(values.password, values.email);
    // TODO: придумать, как очищать поля формы после успешной регистрации
  }

  return (
    <>
      <SignForm
        title={'Регистрация'}
        formType={'sign-up'}
        btnTxt={'Зарегистрироваться'}
        isRegistrationForm={true}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
