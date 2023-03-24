import React from 'react';
import logoImg from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a href="#" className="header__link">
            <img src={logoImg} alt="Логотип Mesto" className="header__logo" />
          </a>
          <button type="button" className="header__btn"></button>
        </div>
        <div className="header__user">
          <a href="#" className="header__mail">email@mail.com</a>
          <button type="button" className="header__logout">Выйти</button>
        </div>
      </div>
    </header>
  )
}
