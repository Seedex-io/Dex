import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #161a1e; /* Example background color */
  color: #fff; /* Example text color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

const InitialIcon = ({ text }: any) => {
  const initial = text ? text.charAt(0).toUpperCase() : '';

  return <IconContainer>{initial}</IconContainer>;
};

export default InitialIcon;
