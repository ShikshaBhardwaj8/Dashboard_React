import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  const isDark = currentMode === 'Dark';

  return (
    <div
      className="rounded-xl p-4 shadow-md"
      style={{
        backgroundColor: isDark ? '#2c2c2c' : '#ffffff',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: isDark ? '#ffffff' : '#1a1a1a' }}
      >
        Department-wise Stats
      </h2>

      <ChartComponent
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width={width}
        height={height}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={isDark ? '#2c2c2c' : '#fff'}
        legendSettings={{
          background: isDark ? '#2c2c2c' : '#ffffff',
          textStyle: {
            color: isDark ? '#E0E0E0' : '#333',
            fontWeight: '500'
          }
        }}
      >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
