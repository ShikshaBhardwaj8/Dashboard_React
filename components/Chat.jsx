import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#2f323b] p-8 rounded-lg w-96 shadow-lg">
      <div className="flex justify-between items-center border-b pb-4 dark:border-gray-600">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-lg dark:text-gray-100 text-gray-800">Messages</p>
          <button
            type="button"
            className="text-white text-xs rounded px-2 py-1"
            style={{ backgroundColor: currentColor }}
          >
             New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      <div className="mt-5">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b border-color p-3 hover:bg-gray-100 dark:hover:bg-[#383C47] rounded-lg transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-100 text-gray-800">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
