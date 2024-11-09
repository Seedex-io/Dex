import React from 'react';
import styled from 'styled-components';
import blackLogo from '../../assets/logo_black.png';
import wave from '../../assets/wave.png';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #161a1e;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  overflow: hidden !hidden;
  .wave-fill {
    height: 98px;
    width: 100px;
    background: #ccc;
    -webkit-mask-image: url(${blackLogo});
    -webkit-mask-size: contain;
  }
  span {
    display: block;
    width: 100%;
  }
  .wave {
    background: url(${wave});

    height: 10px;
    background-size: contain;
    animation: wave 10s linear infinite;
  }
  .deep-water {
    background: linear-gradient(137.56deg, rgb(43, 1, 231) -2.33%, #0197c5 61.75%);
    height: 200px;
  }

  @keyframes wave {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: 1000px 0px;
    }
  }
  .water {
    animation: water 7s ease infinite;
  }
  @keyframes water {
    from {
      transform: translateY(50%);
    }
    to {
      transform: translateY(-5%);
    }
  }
`;
const LoadingText = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  text-align: center;
  color: #fff;
  z-index: 999;
  width: 100%;
  overflow: hidden !hidden;
`;

export default function Loading(props: any) {
  const { text } = props;
  return (
    <>
      <LoadingWrapper>
        <div className="wave-fill">
          <div className="water">
            <span className="wave"></span>
            <span className="deep-water"></span>
          </div>
        </div>
      </LoadingWrapper>
      <LoadingText className="wave-loading">{text}</LoadingText>
    </>
  );
}
