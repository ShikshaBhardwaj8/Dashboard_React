import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#2e2e3a] dark:via-[#252532] dark:to-[#1f1f2b] rounded-3xl shadow-xl transition-all duration-300 ease-in-out">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full flex justify-center items-center">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#2a2a32' : '#fff'}
          height="420px"
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="60%"
              height="90%"
              neckWidth="15%"
              gapRatio={0.04}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: '#e74c3c' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: {
                  fontWeight: '600',
                  color: currentMode === 'Dark' ? '#fff' : '#000',
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
