import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className="mb-10">
    <div className="text-center md:text-left">
      <p className="text-md text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
        Chart
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-gray-100">
        {category}
      </h2>
    </div>
    <p className="text-center dark:text-gray-300 text-lg mt-4">
      {title}
    </p>
  </div>
);

export default ChartsHeader;
