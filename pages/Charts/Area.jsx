import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend
} from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-gradient-to-br from-white via-green-50 to-white dark:from-[#2c2c38] dark:via-[#20202b] dark:to-[#16161f] rounded-3xl shadow-xl transition-all duration-300 ease-in-out">
      <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full flex justify-center items-center">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#2f2f3a' : '#fff'}
          legendSettings={{
            background: currentMode === 'Dark' ? '#2f2f3a' : 'white',
            textStyle: {
              color: currentMode === 'Dark' ? '#E5E7EB' : '#1F2937'
            }
          }}
          width="95%"
          height="420px"
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
