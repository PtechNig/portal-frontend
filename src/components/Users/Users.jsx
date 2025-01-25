import { FaUsers } from "react-icons/fa6";
import './Users.css'
import { useEffect, useState } from 'react';
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/allUsers')
    .then(res => {
      setData(res.data.data.users)
      console.log(res.data.data.users)
    })
    .catch(err => console.error('Error:', err))
  }, [])
  return (
    <div className='user-wrapper'>
      <div className='user-title'>
        <h3>Users</h3>
        <FaUsers className='user-icon'  />
      </div>
      <div className='user-table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
