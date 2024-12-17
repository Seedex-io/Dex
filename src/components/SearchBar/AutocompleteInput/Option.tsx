import ShortText from '../../ShortText';
import uniswaplogo from '../../../assets/uniswap.webp'
import ETHlogo from '../../../assets/chain/ether.png'
import seedexlogo from '../../../assets/logo.png'
import { slice } from 'lodash';

export default function Option(props: any) {
  const { option } = props;
  return (
    <div
      className="bg-[#230a28] border-fuchsia-500 hover:bg-[#230a28]/40 flex cursor-pointer select-none items-center gap-10 rounded-sm border px-2 py-2 text-white first:mt-1 last:mb-1 mb-2"
      onClick={() => {
        window.open(`/${option.pairAddress}-ether`, '_self');
      }}
      key={option.pairAddress}
    >
      {/* Token Image and Chain Icon */}
      <div className="flex flex-[4] items-center gap-4 py-1">
        <div className="relative h-fit w-fit min-w-fit rounded-full">
          <img
            src={seedexlogo}
            className="h-[42px] max-h-[42px] w-[42px] rounded-full border-2 border-[#627eea]"
            alt="Token Logo"
          />
          <div className="absolute bottom-[-3px] right-[-3px] flex rounded-full bg-black p-[1px]">
            <img
              src={ETHlogo}
              alt="chain"
              width="22"
              height="22"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Token Info */}
        <div className="flex flex-col gap-[2px]">
          <p className="group text-sm text-white">
            {option.symbolBase} / <span className="transform text-[#DCDEE3] duration-300 group-hover:text-white">{option.symbolQuote}</span>
          </p>
          <p className="one-line text-[13px] text-white">{option.name}</p>
          <div className="inline-flex">
            <p className="text-seedex-light !font-mono text-[13px] font-light">{option.pairAddress.slice(0, 6)}...{option.pairAddress.slice(-5)}</p>
            <button className="ml-0.5 px-1" aria-label="Copy Address">
              <svg
                width="12"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rebrand-light-blue scale-100"
              >
                <path
                  d="M4 2.5v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4.121a1 1 0 0 0-.301-.715L8.041 1.785a1 1 0 0 0-.699-.285H5a1 1 0 0 0-1 1Z"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 9.5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Token Price and Exchange Info */}
      <div className="ml-auto flex flex-col items-end gap-0.5">
        <p className="text-sm text-white">$0.02507</p>
        <p className="mb-0.5 text-[13px] text-rebrand-red">-1.27%</p>
        <img
          src={uniswaplogo}
          alt="Uniswap V3"
          width="18"
          height="18"
          className="rounded-full"
        />
      </div>

      {/* Token Metrics */}
      <div className="grid h-full flex-[6] grid-cols-3 gap-x-10 gap-y-1 py-1">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">24h Vol</p>
          <p className="text-sm text-white">$41K</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">Buys</p>
          <p className="text-rebrand-green text-sm">13</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">Txns</p>
          <p className="text-sm text-white">24</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">Liq</p>
          <p className="text-sm text-white">$194K</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">Sells</p>
          <p className="text-rebrand-red text-sm">11</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">Age</p>
          <p className="text-sm uppercase text-white">1y</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#DCDEE3]">MCap</p>
          <p className="text-sm text-white">$25M</p>
        </div>
      </div>
    </div>
  );
}