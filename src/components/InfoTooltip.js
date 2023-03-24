import React from 'react';
import successImg from '../images/sucсess.svg';
import failImg from '../images/fail.svg';

export default function InfoTooltip() {

  const isSuccesfull = true;
  const isOpen = false;

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        {isSuccesfull
          ? <img src={successImg} alt="Картинка статуса регистрации" className="popup__status-img" />
          : <img src={failImg} alt="Картинка статуса регистрации" className="popup__status-img" />}
        <h3 className="popup__status-title">
          {isSuccesfull ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
        <button type="button" className="popup__close-button" aria-label="Кнопка закрытия попапа"></button>
      </div>
    </div>
  )
}

{/* { isOpen, onBgClose, title, isSuccesfull }
<div className={`popup ${isOpen ? 'popup_opened' : ''}`} onMouseDown={onBgClose}>
<div className="popup__container">
  {isSuccesfull
    ? <img src="" alt="" className="popup__status-img" />
    : ''}
  <h3 className="popup__header">{title}</h3>
  <button type="button" className="popup__close-button" aria-label="Кнопка закрытия попапа" onClick={onClose}></button>
</div>
</div> */}
