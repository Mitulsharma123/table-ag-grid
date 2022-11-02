import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import './App.css'; 

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(result => setRowData(result.data));
  }, []);

  /*const [columnDefs, setColumnDefs] = useState([
       { field: 'casenumber', sortable: 'true', fiter: 'true'},
       { field: 'product', sortable: 'true', fiter: 'true'},
       { field: 'status', sortable: 'true', fiter: 'true'}
       { field: 'certification type', sortable: 'true', fiter: 'true'}
       { field: 'ecosystem', sortable: 'true', fiter: 'true'}
       { field: 'ladt updated', sortable: 'true', fiter: 'true'}
   ]);*/

  return (
     <div className="ag-theme-alpine" 
     style={{height: 400, width: 6000}}>
           <AgGridReact
                defaultColDef={{ flex: 1 }}
                rowHeight={60}
                rowData={rowData} >
                <AgGridColumn field="first_name" headerName="First Name" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="last_name" headerName="Last Name" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="Email" sortable={true} filter={true} cellClass="vertical-middle" />
           </AgGridReact>
       </div>
   );
};

export default App;
