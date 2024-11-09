import React from 'react';
import { isMobile } from 'react-device-detect';
import adMobile2 from '../../assets/ads/360x90.png';
import adMobile from '../../assets/ads/320x90_2.jpg';
import adDesktop2 from '../../assets/ads/1140x90.jpeg';
import adDesktop from '../../assets/ads/970x90_2.jpg';
import './style.css';
import Img from '../SimpleComponents/Img';
export default function Ad(props: any) {
  const { adNumber, small } = props;
  const checkMobileAndAdNumber = () => {
    if (isMobile || small)
      return adNumber === 1 ? adMobile : adMobile2;
    else return adNumber === 1 ? adDesktop : adDesktop2;
  };

  const openLink = () => {
    window.open('https://chooky-inu.com', '_blank');
  };

  return (
    <Img
      onClick={openLink}
      className="ad"
      src={checkMobileAndAdNumber()}
      alt=""
    />
  );
}
