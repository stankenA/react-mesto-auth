import React from 'react';
import { Link } from 'react-router-dom';

export default function SignForm({ title, formType, btnTxt, isRegistrationForm }) {
  return (
    <div className="sign">
      <h1 className="sign__title">{title}</h1>
      <form name={`${formType}-form`} className="sign__form">
        <fieldset className="sign__fieldset">
          <input
            type="email"
            name={`${formType}-mail`}
            id={`${formType}-mail`}
            className="sign__input"
            required
            placeholder="Email"
          />
          <input
            type="password"
            name={`${formType}-password`}
            id={`${formType}-password`}
            required
            className="sign__input"
            placeholder="Пароль"
          />
        </fieldset>
        <button type="button" className="sign__submit">{btnTxt}</button>
      </form>
      {isRegistrationForm && <Link to="/sign-in" className="sign__link">Уже зарегистрированы? Войти</Link>}
    </div>
  )
}
