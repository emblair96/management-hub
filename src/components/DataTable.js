import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Container, Avatar } from '@material-ui/core';

export default function DataTable({employeeList}) {

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 70 
    },
    { 
      field: 'photo',
      headerName: 'Photo',
      width: 130,
      renderCell: (params) => (
        <Avatar src={params.value}/>
      ),
    },
    { 
      field: 'firstName', 
      headerName: 'First name', 
      width: 170 
    },
    { 
      field: 'lastName', 
      headerName: 'Last name', 
      width: 170 },
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
  ];

  return (
    <Container>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid 
          rows={employeeList}
          columns={columns} 
          pageSize={20}
          checkboxSelection
        />
      </div>
    </Container>
  );
};