import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="bg-half-transparent fixed inset-0 z-50 flex justify-end">
      <div className="h-full w-full md:w-96 bg-white dark:bg-[#2f3035] p-6 overflow-y-auto shadow-lg transition-all duration-500 ease-in-out">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-xl dark:text-white">🛒Shopping Cart</h2>
          <Button
            icon={<MdOutlineCancel />}
            color="#9BABBA"
            bgHoverColor="#F3F4F6"
            size="2xl"
            borderRadius="50%"
          />
        </div>

        {/* Cart Items */}
        {cartData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4 mb-4 dark:border-gray-600"
          >
            <img
              className="rounded-lg h-24 w-24 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="font-semibold dark:text-white">{item.name}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">{item.category}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-lg dark:text-white">{item.price}</p>
                <div className="flex items-center border rounded overflow-hidden">
                  <button className="px-2 py-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900">
                    <AiOutlineMinus />
                  </button>
                  <span className="px-3 text-green-600 font-semibold bg-gray-100 dark:bg-[#3d3f47]">0</span>
                  <button className="px-2 py-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900">
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Subtotal & Total */}
        <div className="space-y-2 text-gray-700 dark:text-gray-200 mb-6">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span className="font-semibold">$890</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold">$890</span>
          </div>
        </div>

        {/* Place Order Button */}
        <Button
          color="white"
          bgColor={currentColor}
          text="Place Order"
          borderRadius="10px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Cart;
