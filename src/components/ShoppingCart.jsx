import React, { useRef, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

const ShoppingCart = ({ isOpen, onClose }) => {
  const cartRet = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        CgSmartHomeRefrigerator.current &&
        !CgSmartHomeRefrigerator.current.contains(event.target)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    //CLeanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300`}>
      {/* BackDrop */}
      <div className={`absolute inset-0transition-opacity duration-300`}></div>
      {/* Cart Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transform transition-transform duration-300`}
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Shopping Cart</h2>
          <button className='flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer'>
            <IoMdClose />
          </button>
        </div>
        <p className='text-sm text-gray-500'>0 items</p>
        <p className='text-sm text-gray-500 my-4'>
          Free Shopping for all orders over $1000.00
        </p>
        <p className='text-sm text-gray-600 text-center'>Your cart is empty</p>
        <button className='mt-8 bg-indigo-600 text-white p-4 py-3 w-full rounded hover:bg-indigo-700 uppercase font-semibold cursor-pointer transition'>
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart
