import React from 'react';
import logoImg from '../images/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a href="#" className="header__link">
            <img src={logoImg} alt="Логотип Mesto" className="header__logo" />
          </a>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="header__user">
                    <p className="header__mail">email@mail.com</p>
                    <button type="button" className="header__logout">Выйти</button>
                  </div>
                  <button type="button" className="header__btn"></button>
                </>
              }
            />
            <Route
              path="/sign-in"
              element={
                <Link to="/sign-up" className="header__sign-btn">Регистрация</Link>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Link to="/sign-in" className="header__sign-btn">Вход</Link>
              }
            />
          </Routes>
        </div>
      </div>
    </header>
  )
}