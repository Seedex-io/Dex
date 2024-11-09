import { useState } from "react";


const WarningMessage = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const hideWarningMessage = () => setIsVisible(false);
  
    if (!isVisible) return null;
  
    return (
      <div className="bg-[#ffa500]/10 relative px-3 py-1 mb-2">
        <p className="text-[#ffa500] text-center text-[13px] md:text-sm">
          Warning: The new pairs are not vetted and could potentially be scams. Always conduct your own research before investing in any new token.
        </p>
        <button
          onClick={hideWarningMessage}
          className="bg-[#ffa500]/40 hover:bg-[#ffa500]/50 absolute -right-1 -top-1 rounded-full p-1 text-[11px] text-white"
          aria-label="Close warning message"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
    );
  };

export default WarningMessage;