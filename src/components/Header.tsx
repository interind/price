import React from 'react';
import mobile from '../images/header/MobileSignal.svg';
import wifi from '../images/header/Wifi.svg';
import battery from '../images/header/Battery.svg';
import '../blocks/header/__notch/header__notch.css';

function Header() {
  const time = new Date().toTimeString().slice(0, 5);
  return (
    <div className="header">
      <div className="header__top">
        <span className="header__time">{time}</span>
        <div className="header__notch" />
        <ul className="icons">
          <li>
            <img className="header__item" src={mobile} alt="gsm" />
          </li>
          <li>
            <img className="header__item" src={wifi} alt="wifi" />
          </li>
          <li>
            <img className="header__item" src={battery} alt="battery" />
          </li>
        </ul>
      </div>
    <button className="button button_type_menu" type="button"></button>
   </div>
  );
}

export default Header;