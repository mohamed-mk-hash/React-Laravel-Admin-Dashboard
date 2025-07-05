import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axiosClient from '../axios-client';

export default function Users() {
  const [users, setUser] = useState([]);
  const [loading, setloading] = useState(false)

  useEffect( () => {
   getUsers();
  }, [])

  const onDelete = (u) => {
    if(!window.confirm("Are you sure you want to delete this user")){
      return 
    }

    axiosClient.delete(`/users/${u.id}`)
    .then(() => {
      getUsers()
    })
  }

  const getUsers = () => {
    setloading(true)
    axiosClient.get('/users')
    .then(({data}) => {
      setloading(false)
      console.log(data.data)
      setUser(data.data)
    })
    .catch(() => {
     setloading(false)
    })
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}} >
        <h1>User</h1>
        <Link to="/users/new" className="btn-add">Add New</Link>
      </div>
      <div className="card animation fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading && <tbody>
            <tr>
              <td colSpan="5" className="text-center">
                Loading...
              </td>
            </tr>
          </tbody>
          }
          {!loading &&
          <tbody>
            {users.map(u => (
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created}</td>
                <td>
                  <Link className="btn-edit" to={'/users/'+u.id}>Edit</Link>
                  &nbsp;
                  <button onClick={ev => onDelete(u)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
}
        </table>
      </div>
    </div>
  )
}
