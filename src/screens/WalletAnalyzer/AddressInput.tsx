import React, { useState } from 'react';

interface AddressInputProps {
  address: string;
  onSubmit: (address: string) => void; // Handle address submission
}

const AddressInput: React.FC<AddressInputProps> = ({ address, onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>(address);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim()); // Call the parent handler
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <div className="w-[42rem] max-w-[80vw] items-center rounded-xl border border-[rgba(255,255,255,0.19)] bg-dark-seedex px-2 py-1 sm:flex hover:shadow-[0_0_0_1px_#d946ef]">
        <input
          placeholder="Enter a wallet address"
          className="w-full bg-transparent py-1.5 px-2 outline-none sm:text-lg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button
          className="ml-2 bg-fuchsia-500 px-4 py-1 rounded-lg text-black hover:bg-light-seedex"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddressInput;
