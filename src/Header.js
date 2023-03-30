import React from 'react'
import {
    BellIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline"

function Header() {
  return (
    <div className='max-w-6xl mx-auto p-2'>
      <nav className='flex justify-between'>
        <div className='flex items-center space-x-2 text-sm'>
          <button className='connectWalletBtn'>
            Connect Wallet
          </button>
          <p className='headerLink'>Daily Deals</p>
          <p className='headerLink'>Help & Contact</p>
        </div>
        <div className='flex items-center space-x-4 text-sm'>
            <p className='headerLink'>Ship To</p>
            <p className='headerLink'>Sell</p>
            <p className='headerLink'>Watchlist</p>
            <a href="/addItem" className='flex items-center hover:link'>
                Add to inventory
                <ChevronDownIcon className='h-4'/>
            </a>
            <BellIcon className='h-6 w-6'/>
            <ShoppingCartIcon className='h-6 w-6'/>
        </div>
      </nav>
      <hr className='mt-2'/>
      <section className='flex items-center space-x-2 py-5'>
        <div className='h-16 w-16 sm:w-28 m:w-44 cursor-pointer flex-shrink-0'>
          <a href="/">
            <img
              className='h-full w-full object-contain'
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
              width={100}
              height={100}
            />
          </a>
        </div>
        <button className='hidden lg:flex items-center space-x-2 w-20'>
          <p className='text-gray-600 text-sm'>Shop By Category</p>
          <ChevronDownIcon className='h-4 flex-shrink-0'/>
        </button>
        <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1'>
          <MagnifyingGlassIcon className='w-5 text-gray-400'/>
          <input className='flex-1 outline-none' placeholder='Search for Anything' type="text"/>
        </div>
        <button className='hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600'>Search</button>
        <button className='hidden sm:inline border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer'>List Item</button>
      </section>
      <hr className='mt-2'/>
      <section className='flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6'>
        <p className='link'>Home</p>
        <p className='link'>Electronics</p>
        <p className='link'>Computers</p>
        <p className='link hidden sm:inline'>Video Games</p>
        <p className='link hidden sm:inline'>Home & Garden</p>
        <p className='link hidden md:inline'>Health & Beauty</p>
        <p className='link hidden lg:inline'>Collections and Art</p>
        <p className='link hidden lg:inline'>Books</p>
        <p className='link hidden lg:inline'>Music</p>
        <p className='link hidden xl:inline'>Deals</p>
        <p className='link hidden xl:inline'>Other</p>
        <p className='link'>More</p>
      </section>
    </div>
  )
}

export default Header
