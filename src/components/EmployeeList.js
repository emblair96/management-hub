import React, {useEffect, useState} from 'react';
import DataTable from './DataTable';

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
    ({
      "id": index+=1, 
      "firstName": user.name.first, 
      "lastName": user.name.last, 
      "email": user.email, 
      "phoneNumber": user.phone, 
      "photo": user.picture.thumbnail
   })))

  return (
    <DataTable employeeList={employeeList}/>
  )
};
