import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../axios-client"
import { useStateContext } from "../Context/Contextprovider"

export default function UserForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const{setNotification} = useStateContext();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  useEffect(() => {
    if (id) {
      setLoading(true)
      axiosClient.get(`/users/${id}`)
        .then(({ data }) => {
          setLoading(false)
          setUser(data)
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }, [id])

  const onSubmit = (ev) => {
    ev.preventDefault();
  
    const isUpdate = !!user.id;
  
    const request = isUpdate
      ? axiosClient.put(`/users/${user.id}`, user)
      : axiosClient.post(`/users`, user);
  
    request
      .then(() => {
        setNotification(isUpdate ? "User was successfully updated" : "User was successfully created");
        navigate('/users');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  }
  

  return (
    <>
      {user.id ? <h1>Update User: {user.name}</h1> : <h1>New User</h1>}
      <div className="card animated fadeInDown">
        {loading && <div className="text-center">Loading...</div>}

        {errors && (
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}

        {!loading && (
          <form onSubmit={onSubmit}>
            <input
              value={user.name}
              onChange={ev => setUser({ ...user, name: ev.target.value })}
              placeholder="name"
            />
            <input
              value={user.email}
              onChange={ev => setUser({ ...user, email: ev.target.value })}
              placeholder="email"
            />
            <input
              type="password"
              onChange={ev => setUser({ ...user, password: ev.target.value })}
              placeholder="password"
            />
            <input
              type="password"
              onChange={ev => setUser({ ...user, password_confirmation: ev.target.value })}
              placeholder="password confirmation"
            />
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  )
}
