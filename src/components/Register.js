import React, { useState } from 'react';
import InfoTooltip from './InfoTooltip';
import SignForm from './SignForm';
import * as auth from '../utilis/auth';

export default function Register({ handleTooltipOpen, onClose, isOpen, onBgClose }) {

  const [isRegistrationSuccessfull, setIsRegistrationSuccessfull] = useState(false);

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
    console.log(formValue);

    auth.register(formValue.password, formValue.email)
      .then((res) => {
        if (res) {
          setIsRegistrationSuccessfull(true);
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
