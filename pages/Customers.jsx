import React from 'react';
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gradient-to-br from-white via-slate-100 to-white dark:from-secondary-dark-bg dark:to-slate-800 rounded-3xl shadow-xl transition-all duration-300 ease-in-out">
      <div className="max-w-[1200px] mx-auto">
        <Header category="Page" title="Customers" />
        <div className="mt-4 bg-white dark:bg-[#2d2d2d] rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <GridComponent
            dataSource={customersData}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageSize: 8 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page, Toolbar]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Customers;
