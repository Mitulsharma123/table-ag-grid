import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
 
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
 
import './App.css';
import data from '/Users/mitul/codebase/react/adminpage/src/data.json'

function App() {
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    fetch(data)
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
     style={{height: 400, width: 1450}}>
           <AgGridReact
                defaultColDef={{ flex: 1 }}
                rowHeight={60}
                rowData={rowData} >
                <AgGridColumn field="first_name" headerName="CASE NUMBER" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="last_name" headerName="CERTOPS" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="RHCERT" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="PRODUCT" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="STATUS" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="CERTIFICATION TYPE" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="ECOSYSTEM" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="email" headerName="LAST UPDATED" sortable={true} filter={true} cellClass="vertical-middle" />
           </AgGridReact>
       </div>
   );
};

export default App;
