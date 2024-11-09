import React from 'react';
import ShortText from '../../ShortText';

export default function Option(props: any) {
  const { option } = props;
  return (
    <div
      className="option"
      onClick={() => {
        window.open(`/${option.pairAddress}-ether`, '_self');
      }}
      key={option.pairAddress}
    >
      {/* <img
        src={`https://www.dextools.io/resources/tokens/logos/ether/${option.baseToken.address.toLowerCase()}.png`}
        alt=""
        className="option_img"
      /> */}
      <div className="option__text">
        <div className="option__text__symbol_ref">
          {option.symbolBase} / {option.symbolQuote}
        </div>
        <div className="option__text__name">{option.name}</div>
        <div className="option__text__symbol">
          <ShortText text={option.pairAddress} />
        </div>
      </div>
    </div>
  );
}
