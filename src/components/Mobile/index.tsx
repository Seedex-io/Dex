import React from 'react';
import logoSmall from '../../assets/logo.png';
import Div from '../SimpleComponents/Div';
import Img from '../SimpleComponents/Img';
import './style.css';
export default function Mobile(props: any) {
  const { text } = props;
  return (
    <Div className="mobile_version">
      <Img src={logoSmall} className="logo_drawer_img" alt="" />
      {text}
    </Div>
  );
}
