import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import Filtermodal from './filtermodal';

interface DateRange {
    start: string | null;
    end: string | null;
}

interface FilterCriteria {
    minVolume: number | null;
    maxVolume: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    minLiquidity: number | null;
    maxLiquidity: number | null;
    minFDV: number | null;
    maxFDV: number | null;
    dateRange: DateRange;
    minLast5mChange: number | null;
    maxLast5mChange: number | null;
    minLast1hChange: number | null;
    maxLast1hChange: number | null;
    minLast6hChange: number | null;
    maxLast6hChange: number | null;
    minLast24hChange: number | null;
    maxLast24hChange: number | null;
}

interface FiltersProps {
    filters: FilterCriteria;
    onFilterChange: (key: keyof FilterCriteria, value: any) => void;
    onApply: () => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, onApply }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleApplyFilters = () => {
        onApply();
        handleClose();
    };

    return (
        <>
            <div className="text-white">
                <div className="flex w-full overflow-x-hidden" style={{ position: 'relative' }}>
                    <div className="flex w-full overflow-x-hidden">
                        <div className="flex-1 flex w-full gap-2 py-2">
                            <div className="2xl:mr-2">
                                <button type="button" className="inline-flex items-center justify-center select-none relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-tight rounded-md font-semibold transition duration-200 h-8 min-w-8 text-sm px-3 bg-fuchsia-700 text-white" id="menu-button-:R139kipk2qmauH1:" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-:R139kipk2qmauH1:">
                                    <span className=" inline-flex items-center shrink-0 mr-1">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                                        </svg>
                                    </span>
                                    <span className="pointer-events-none flex-1 min-w-0"><span>Last 24 hours</span></span>
                                    <span className=" inline-flex items-center shrink-0 ms-1">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="flex items-center flex-row gap-2">
                                <div className="flex items-center">
                                    <button type="button" className="inline-flex items-center justify-center user-select-none relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-[1.2] rounded-md font-semibold transition-all duration-200 h-8 min-w-32 text-sm px-3 bg-fuchsia-200 text-fuchsia-900">
                                        <span className=" inline-flex items-center shrink-0 mr-1">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"></path>
                                            </svg>
                                        </span>
                                        Trending
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button type="button" className="inline-flex items-center justify-center user-select-none relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-[1.2] rounded-md font-semibold transition-all duration-200 h-8 min-w-32 text-sm px-3 bg-fuchsia-200 text-fuchsia-900">
                                        <span className=" inline-flex items-center shrink-0 mr-1">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                                            </svg>
                                        </span>
                                        Gainers & Losers
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button type="button" className="inline-flex items-center justify-center user-select-none relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-[1.2] rounded-md font-semibold transition-all duration-200 h-8 min-w-32 text-sm px-3 bg-fuchsia-200 text-fuchsia-900">
                                        <span className=" inline-flex items-center shrink-0 mr-1">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"></path>
                                            </svg>
                                        </span>
                                        New Pairs
                                    </button>
                                </div>
                            </div>
                            <div role="group" className=" pl-2 ml-auto inline-flex pr-1" data-attached="" data-orientation="horizontal">
                                <button type="button" className="ps-3 pe-3 rounded-tr-none rounded-br-none inline-flex h-8 items-center justify-center relative whitespace-nowrap align-middle rounded-md border border-fuchsia-400/80 text-white/90" id="menu-button-:Rd99kipk2qmauH1:" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-:Rd99kipk2qmauH1:">
                                    <span className="flex-1 min-w-0">
                                        <div className="flex items-center flex-row gap-1">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
                                            </svg>
                                            <span className="md:block hidden">Rank by:</span>
                                            <div className="flex items-center flex-row gap-1 ">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                                                </svg>
                                                <span className="md:block hidden">Trending 12H</span><span className="block md:hidden">Trend 12H</span>
                                            </div>
                                        </div>
                                    </span>
                                </button>
                                <button type="button" onClick={handleOpen} className="inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-tight rounded-md font-semibold transition-all duration-200 h-8 min-w-8 text-sm px-3 border-fuchsia-400/80 text-white/90 rounded-r-md rounded-l-none border-l-0 border">
                                    <span className="me-1 inline-flex items-center shrink-0 mr-1">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" focusable="false" className="w-3 h-3 inline-block flex-shrink-0 text-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
                                        </svg>
                                    </span>
                                    <span className=" custom-5b814g">Filters</span><span className="feature-add">new!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Modal for Filters */}
            <Modal open={open} onClose={handleClose}>
                <Filtermodal
                    filters={filters}
                    onFilterChange={onFilterChange}
                    onApply={handleApplyFilters}
                />
            </Modal>
        </>
    );
};

export default Filters;
