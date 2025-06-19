import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#2d2f33] p-8 rounded-xl shadow-lg w-96 transition-all duration-300">
      <div className="flex justify-between items-center border-b border-color pb-4">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-lg dark:text-gray-200 text-gray-800">🔔 Notifications</p>
          <span className="text-white text-xs font-semibold rounded px-2 py-1 bg-orange-500">
            5 New
          </span>
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
            className="flex items-start gap-4 border-b border-color p-3 hover:bg-light-gray dark:hover:bg-[#3b3f47] rounded-lg transition"
          >
            <img
              className="rounded-full h-10 w-10 object-cover"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="12px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
