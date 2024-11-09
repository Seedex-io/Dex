import React from 'react';
import Div from '../SimpleComponents/Div';
import './style.css';
export default function Button(props: any) {
  const { title, focus, className } = props;
  return (
    <Div
      {...props}
      className={`button ${className}`}
      sx={{
        borderColor: focus
          ? 'primary.contrastText'
          : 'primary.border',
        color: 'primary.contrastText',
      }}
    >
      {title}
    </Div>
  );
}
