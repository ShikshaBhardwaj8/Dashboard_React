import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-4 md:p-10 rounded-3xl shadow-lg transition-all duration-500"
    style={{
      background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 50%, #ffffff 100%)', // Aesthetic soft blue gradient
    }}
  >
    <Header category="App" title="Kanban Board" />

    <div className="bg-white dark:bg-[#1f2937] rounded-2xl p-4 shadow-md">
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
          template: (props) => (
            <div
              className="p-4 rounded-xl bg-blue-50 dark:bg-slate-700 shadow hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <p className="font-bold text-blue-800 dark:text-white">{props.Id}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{props.Summary}</p>
            </div>
          )
        }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  </div>
);

export default Kanban;
