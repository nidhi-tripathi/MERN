import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import axios from 'axios'
const Register = () => {

  const[username, setUsername] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) =>{
  e.preventDefault()
axios.post('http://localhost:3001/register', {username, email, password})
.then(res => navigate('/login') )
.catch(err => console.log(err))
}

  return (
    <div className='signup_container'>
  <div className='signup_form'>
    <h2>sign Up</h2>
    <br />
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlfor="name">Username:</label>
            <input type="text" placeholder='Enter username'
            onChange={e => setUsername(e.target.value)}/>
        </div>
        <br />
        <div>
            <label htmlfor="email">Email:</label>
            <input type="email" placeholder='Enter Email'
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <br />
        <div>
            <label htmlfor="password">Password:</label>
            <input type="password" placeholder='********'
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className='signup_btn'>Sign up</button>
    </form>
    <br></br>
    <p>Already have account?</p>
    <Link to="/login"><button>Login</button></Link>
  </div>
    </div>
  )
}

export default Register
