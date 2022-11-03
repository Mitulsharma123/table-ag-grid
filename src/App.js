import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
 
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
 
import './App.css';
import data from './data.json'

function App() {
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    setRowData(data)
  },[]);

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
                <AgGridColumn field="id" headerName="CASE NUMBER" sortable={true} filter={true} cellClass="vertical-middle" />
           </AgGridReact>
       </div>
   );
};

export default App;

