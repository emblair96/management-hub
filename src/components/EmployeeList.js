import React, {useEffect, useState} from 'react';
import DataTable from './DataTable';
import { Avatar } from '@material-ui/core';



export default function EmployeeList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10")
        const userData = await response.json();
        setUsers([...userData.results])
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()

  }, []);

  const employeeList = users.map((user, index) => (
    ({"id": index, "firstName": user.name.first, "lastName": user.name.last, "email": user.email, "phoneNumber": user.phone, "photo": <img src={user.picture.thumbail} />
   })))

  useEffect(() => console.log("LIST", employeeList))

  return (
    <>
    <h1>List of employees</h1>
    <DataTable employeeList={employeeList}/>
    </>
  )
}
