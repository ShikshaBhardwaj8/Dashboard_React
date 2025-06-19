import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from '@syncfusion/ej2-react-charts';

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis
} from '../../data/dummy';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out bg-gradient-to-br from-white via-sky-50 to-white dark:from-[#2c2c38] dark:via-[#1e1e28] dark:to-[#16161f]">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full flex justify-center items-center">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#2e2e38' : '#fff'}
          legendSettings={{ background: currentMode === 'Dark' ? '#2e2e38' : 'white' }}
          width="95%"
          height="420px"
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
