import CopyText from '../CopyText';
import Div from '../SimpleComponents/Div';
import Social from '../Social';
import PoolInfoItems from './PoolInfo/PoolInfoItems';

export default function Header(props: any) {
  const { token } = props;
  return (
    <Div className="token_info__header">
      <PoolInfoItems val={token.name} name="Token Name:" text />
      <PoolInfoItems val={<CopyText text={token.tokenAddress} />} name="Token:" text />
      <PoolInfoItems val={<CopyText text={token.pairAddress} />} name="Pair:" text />
      <PoolInfoItems val={token.mcap} name="Market Cap:" />
      <PoolInfoItems
        val={<Social socialLinks={token.links} address={token.token} chain={token.chain} />}
        name="Socials:"
        text
      />
    </Div>
  );
}
