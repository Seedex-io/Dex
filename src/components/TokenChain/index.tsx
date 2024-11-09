import React from 'react';
import './style.css';
import ethIcon from '../../assets/chain/ether.png';
import bscIcon from '../../assets/chain/bsc.png';
import { getChainName } from '../../utils/chains';
import Img from '../SimpleComponents/Img';
import Div from '../SimpleComponents/Div';

export default function TokenChain(props: any) {
  const { chain } = props;
  const renderIcon = () => {
    switch (chain) {
      case 'bsc':
        return <Img src={bscIcon} className="iconchain" alt="bsc" />;
      case 'ether':
        return (
          <Img src={ethIcon} className="iconchain" alt="ether" />
        );

      default:
        return (
          <Img src={ethIcon} className="iconchain" alt="ether" />
        );
    }
  };
  return (
    <Div className="tokenchain" {...props}>
      {renderIcon()}
      <Div className="tokenchain_name">{getChainName(chain)}</Div>
    </Div>
  );
}
