import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import Div from '../SimpleComponents/Div';
import Img from '../SimpleComponents/Img';

export const Footer = () => {
  return (
    <Div className="footer_home">
      <Div className="footer__links">
        <Div className="footer__links__item">
          <a href="mailto:info@sendex.io">Info</a>
        </Div>
        <Div className="footer__links__item">
          <a href="mailto:marketing@sendex.io">Marketing</a>
        </Div>
      </Div>
      <Div className="footer__logo">
        <Div className="footer__logo__text">SENDEX.io</Div>
        <Img src={logo} alt="logo" />
        <Div className="footer__logo__text">© {new Date().getFullYear()}, All Rights Reserved</Div>
      </Div>
    </Div>
  );
};
