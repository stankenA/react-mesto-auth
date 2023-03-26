import React, { useState } from 'react';
import InfoTooltip from './InfoTooltip';
import SignForm from './SignForm';
import * as auth from '../utilis/auth';
import { useForm } from '../hooks/useForm';

export default function Register({ handleTooltipOpen, onClose, isOpen, onBgClose }) {

  const [isRegistrationSuccessfull, setIsRegistrationSuccessfull] = useState(false);

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();

    auth.register(values.password, values.email)
      .then((res) => {
        if (res) {
          setIsRegistrationSuccessfull(true);
          setValues({ email: '', password: '' })
        } else {
          setIsRegistrationSuccessfull(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => handleTooltipOpen())
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
      <InfoTooltip
        onClose={onClose}
        onBgClose={onBgClose}
        isOpen={isOpen}
        isSuccesfull={isRegistrationSuccessfull}
      />
    </>
  )
}
