import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const SparkLine = (props) => {
  const { currentMode } = useStateContext();
  const {
    id,
    height,
    width,
    color,
    data,
    type,
    currentColor,
  } = props;

  const isDark = currentMode === 'Dark';
  const background = isDark ? '#2c2c2c' : '#ffffff';
  const tooltipFontColor = isDark ? '#E0E0E0' : '#000';

  return (
    <div
      className="rounded-xl p-2 shadow-md"
      style={{
        background,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : ${yval}',
          textStyle: {
            color: tooltipFontColor,
            fontWeight: '500',
          },
          trackLineSettings: {
            visible: true,
            color: currentColor,
            width: 1
          }
        }}
        markerSettings={{
          visible: ['All'],
          size: 3,
          fill: currentColor,
        }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default SparkLine;
