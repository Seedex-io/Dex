import Social from '../Social';
import Favourite from './Favourite';

export default function Header(props: any) {
  const { token } = props;
  return (
    <div className="">
      <div className='flex w-full flex-wrap items-center justify-between gap-1 px-2.5 sm:px-4 border-[#4c2b52] my-0 border py-1'>
        <div className='flex items-center gap-1'>
          <Social socialLinks={token.links} address={token.token} chain={token.chain} />
        </div>      
        <Favourite token={token} setToken={props.setToken} />  
      </div>
    </div>
  );
}
