import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="rounded-2xl p-4 shadow-md"
      style={{
        backgroundColor: currentMode === 'Dark' ? '#2c2c2c' : '#ffffff',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: currentMode === 'Dark' ? '#fff' : '#1a1a1a' }}
      >
        Revenue Trend
      </h2>
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#2c2c2c' : '#ffffff'}
        legendSettings={{ background: currentMode === 'Dark' ? '#2c2c2c' : '#ffffff' }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => {
            const updatedItem = {
              ...item,
            
              fill: currentMode === 'Dark' ? '#4DD0E1' : item.fill,
              marker: {
                ...item.marker,
                fill: currentMode === 'Dark' ? '#4DD0E1' : item.marker?.fill,
                border: { color: currentMode === 'Dark' ? '#4DD0E1' : item.marker?.border?.color, width: 2 },
              }
            };
            return <SeriesDirective key={index} {...updatedItem} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
