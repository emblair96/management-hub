import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 170 },
  { field: 'lastName', headerName: 'Last name', width: 170 },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone',
    width: 170,
  },
  { 
    field: 'photo', 
    headerName: 'Photo', 
    type: <Avatar />,
    width: 130 
  },
];



export default function DataTable({employeeList}) {

  return (
    <Container>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={employeeList}
        columns={columns} 
        pageSize={5} 
        checkboxSelection 
      />
    </div>
    </Container>
  );
}