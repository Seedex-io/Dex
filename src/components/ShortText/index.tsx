import React from 'react';
import './style.css';
export default function ShortText(props: any) {
  const { text, label, size } = props;
  if (!text) {
    return <></>;
  }
  const textLength = text.length;
  const firstPart = text.slice(
    0,
    textLength / (size === 'big' ? 2 : 5)
  );
  const secondPart = text.slice(textLength / 1.2, textLength);
  return (
    <div className="shortText__text">
      {label && label + ' : '} {firstPart}
      <span className="shortText__text__dot">...</span>
      {secondPart}
    </div>
  );
}
