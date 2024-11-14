import React from 'react';

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

interface FiltermodalProps {
    filters: FilterCriteria;
    onFilterChange: (key: keyof FilterCriteria, value: any) => void;
    onApply: () => void;
}

const Filtermodal: React.FC<FiltermodalProps> = ({ filters, onFilterChange, onApply }) => {
    const handleInputChange = (key: keyof FilterCriteria) => (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(key, event.target.value ? Number(event.target.value) : null);
    };

    return (
        <div className="bg-[#220b26] border-[#4d2c53] mt-0.5 w-[50rem] max-w-[94vw] border shadow-lg md:mt-1.5"  style={{position: 'relative', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',}}>
            <header className="bg-[#2b132e] flex items-center justify-between px-4 py-2">
                <p className="text-base font-medium text-white">Customize Filters</p>
                <button onClick={onApply} className="hover:bg-[#220b26] hover:border-[#4d2c53] border border-transparent px-3 py-2.5 text-white transition-all duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                    </svg>
                </button>
            </header>
            <main className="no-scroll-bar h-[28rem] max-h-[92vh] overflow-auto px-1.5 pb-2 pt-1.5 md:px-4 md:pb-4 md:pt-2.5">
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">Liquidity: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.minLiquidity || ''} onChange={handleInputChange('minLiquidity')} />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxLiquidity || ''} onChange={handleInputChange('maxLiquidity')} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">FDV: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.minFDV || ''} onChange={handleInputChange('minFDV')} />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxFDV || ''} onChange={handleInputChange('maxFDV')} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">Pair Age: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">Hours</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.dateRange.start || ''} onChange={(e) => onFilterChange('dateRange', { ...filters.dateRange, start: e.target.value })} />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">Hours</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.dateRange.end || ''} onChange={(e) => onFilterChange('dateRange', { ...filters.dateRange, end: e.target.value })} />
                        </div>
                    </div>
                </div>
                {/* filter section 2 */}
                <div className="bg-[#4d2c53] blur-sm my-2 ml-0 grid grid-cols-4 gap-[2px] p-[2px] md:ml-[8.75rem]">
                    <button className="bg-[#220b26] py-1 text-sm text-white">24h</button>
                    <button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">12h</button>
                    <button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">3h</button>
                    <button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">1h</button>
                    <span className="feature-add">Soon!</span>
                </div>
                {/* filter section 2 */}
                <div className="md:my-4 block">
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Volume: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.minVolume || ''} onChange={handleInputChange('minVolume')} />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxVolume || ''} onChange={handleInputChange('maxVolume')} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Swaps: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxLast5mChange || ''} onChange={handleInputChange('maxLiquidity')} /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max"  className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxLiquidity || ''} onChange={handleInputChange('maxLiquidity')} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Price Change: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.minLast24hChange || ''} onChange={handleInputChange('minLast24hChange')} />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value={filters.maxLast24hChange || ''} onChange={handleInputChange('maxLast24hChange')} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-[#2b132e] flex items-center justify-center gap-2 py-3">
                <button onClick={onApply} className="bg-rebrand-grad text-rebrand-black h-[32px] w-[8rem] px-4 text-center text-sm font-medium transition-all duration-300 hover:opacity-70 md:h-[36px]">Apply</button>
                <button className="text-[#da00ff] border-[#da00ff] h-[32px] w-[calc(8rem-2px)] border bg-transparent px-4 text-center text-sm font-medium transition-all duration-300 hover:opacity-70 md:h-[36px]">Clear</button>
            </footer>
        </div>
    )
}

export default Filtermodal
