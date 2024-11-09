

const Filtermodal = () => {

    return (
        <div className="bg-[#220b26] border-[#4d2c53] mt-0.5 w-[50rem] max-w-[94vw] border shadow-lg md:mt-1.5">
            <header className="bg-[#2b132e] flex items-center justify-between px-4 py-2">
                <p className="text-base font-medium text-white">Customize Filters</p>
                <button className="hover:bg-[#220b26] hover:border-[#4d2c53] border border-transparent px-3 py-2.5 text-white transition-all duration-300">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                    </svg>
                </button>
            </header>
            <main className="no-scroll-bar h-[28rem] max-h-[92vh] overflow-auto px-1.5 pb-2 pt-1.5 md:px-4 md:pb-4 md:pt-2.5">
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">Price: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">Liquidity: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-1 md:py-2">
                    <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                        <p className="mr-1 self-center text-right text-sm text-white">Pair Age: </p>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">Hours</p>
                            <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                        <div className="flex flex-1 items-center">
                            <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">Hours</p>
                            <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#4d2c53] my-2 ml-0 grid grid-cols-4 gap-[2px] p-[2px] md:ml-[8.75rem]"><button className="bg-[#220b26] py-1 text-sm text-white">24h</button><button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">12h</button><button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">3h</button><button className="text-rebrand-gray-blue bg-[#220b26] py-1 text-sm">1h</button></div>
                <div className="md:my-4 block">
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Volume: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Swaps: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max"  className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Buys: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Sells: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Traders: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">24h Price Change: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:my-4">
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Volume: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Swaps: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Buys: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Sells: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Traders: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">12h Price Change: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:my-4">
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Volume: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Swaps: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Buys: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Sells: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Traders: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">3h Price Change: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:my-4">
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Volume: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">$</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Swaps: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Buys: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Sells: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Traders: </p>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                            <div className="flex flex-1 items-center"><input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 md:py-2">
                        <div className="grid grid-cols-[4rem,1fr,1fr] gap-1 md:grid-cols-[8rem,1fr,1fr] md:gap-3">
                            <p className="mr-1 self-center text-right text-sm text-white">1h Price Change: </p>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Min" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                            <div className="flex flex-1 items-center">
                                <p className="bg-[#321936] flex h-[34px] items-center px-3 text-sm text-white">%</p>
                                <input type="number" placeholder="Max" className="border-[#4d2c53] focus:!border-[#b52fcc] h-[34px] w-0 flex-1 rounded-none border bg-transparent px-2 py-1.5 text-sm text-white hover:border-white/20" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-[#2b132e] flex items-center justify-center gap-2 py-3"><button className="bg-rebrand-grad text-rebrand-black h-[32px] w-[8rem] px-4 text-center text-sm font-medium transition-all duration-300 hover:opacity-70 md:h-[36px]">Apply</button><button className="text-[#da00ff] border-[#da00ff] h-[32px] w-[calc(8rem-2px)] border bg-transparent px-4 text-center text-sm font-medium transition-all duration-300 hover:opacity-70 md:h-[36px]">Clear</button></footer>
        </div>

    )
}

export default Filtermodal