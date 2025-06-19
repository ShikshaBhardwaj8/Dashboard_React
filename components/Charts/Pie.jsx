import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  const isDark = currentMode === 'Dark';
  const labelTextColor = isDark ? '#E0E0E0' : '#000';
  const backgroundColor = isDark ? '#2c2c2c' : '#ffffff';

  return (
    <div
      className="rounded-2xl p-4 shadow-md"
      style={{
        backgroundColor,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: isDark ? '#ffffff' : '#1a1a1a' }}
      >
        Sales Distribution
      </h2>

      <AccumulationChartComponent
        id={id}
        height={height}
        tooltip={{ enable: true }}
        background={backgroundColor}
        legendSettings={{
          visible: legendVisiblity,
          background: backgroundColor,
          textStyle: {
            color: isDark ? '#E0E0E0' : '#333',
            fontWeight: '500'
          }
        }}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sale"
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: labelTextColor,
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Doughnut;
