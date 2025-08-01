import React, { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MdChevronRight } from 'react-icons/md'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

//import Shopping Cart
import ShoppingCart from './ShoppingCart'

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center px-6 py-4 bg-transparent text-black uppercase'>
        <a href='' className='text-2xl font-bold'>
          Gebeta Market
        </a>

        {/* Mobile Menu Button */}
        <button className='lg:hidden flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer'>
          <IoIosMenu className='text-3xl' />
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden lg:block relative'>
          <ul className='flex gap-6 font-medium'>
            <li className='cursor-pointer hover:text-indigo-700'>Home</li>
            <li className='group relative cursor-pointer'>
              <span className='hover:text-indigo-700'>Shop</span>
              {/* Dropdoun Menu */}
              <ul className='absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                  Men
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                  Women
                </li>

                {/* SubMenu */}
                <li className='relative group/submenu'>
                  <span className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 flex items-center justify-between'>
                    Accessories <MdChevronRight />
                  </span>
                  <ul className='absolute left-full top-0 ml-1 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover/submenu:opacity-100 invisible group-hover/submenu:visible transition-a;; duration-300 z-50'>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                      Chargers
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                      Cables
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                      Headphones
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* Collections DropDown */}
            <li className='group relative cursor-pointer'>
              <span className='hover:text-indigo-700'>Collection</span>

              <ul className='absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                  Essentials
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                  Streatwear
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 hover:text-indigo-700'>
                  Workwear
                </li>
              </ul>
            </li>
            <li className='cursor-pointer hover:text-indigo-700'>LookBook</li>
            <li className='cursor-pointer hover:text-indigo-700'>Contact</li>
          </ul>
        </nav>

        <div className='hidden lg:flex items-center gap-4'>
          <input
            type='text'
            placeholder='search....'
            className='px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-700'
          />
          <span className='text-xl cursor-pointer'>
            <IoCartOutline className='text-gray-900 hover:text-indigo-700 text-2xl ' />
          </span>
          <button className='px-6 py-3 bg-indigo-700 cursor-pointer rounded-full text-white font-semibold hover:bg-indigo-800 transition duration-300'>
            Create an Account
          </button>
        </div>
      </header>
      <ShoppingCart />
    </>
  )
}

export default Header
