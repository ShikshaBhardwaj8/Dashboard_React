import React, { useState } from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, Month, Agenda,
  Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = ({ children }) => (
  <div className="mt-6">{children}</div>
);

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 rounded-3xl bg-pink-50 shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="mb-6">
        <Header category="Dashboard" title="eCommerce Calendar" />
      </div>

      {/* Date Picker */}
      <div className="flex justify-end mb-6">
        <DatePickerComponent
          value={new Date(2021, 0, 10)}
          showClearButton={false}
          placeholder="Choose Date"
          floatLabelType="Always"
          change={change}
          cssClass="e-outline e-primary"
        />
      </div>

      {/* Calendar Container */}
      <div className="rounded-2xl overflow-hidden border-2 border-pink-300 bg-white shadow-lg">
        <ScheduleComponent
          height="650px"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(2021, 0, 10)}
          eventSettings={{ dataSource: scheduleData }}
          dragStart={onDragStart}
          cssClass="custom-scheduler"
        >
          <ViewsDirective>
            {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Scheduler;
