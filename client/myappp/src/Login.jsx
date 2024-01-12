import React, {useState}  from 'react'
import './style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

 
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) =>{
  e.preventDefault()
axios.post('http://localhost:3001/login', {email, password})
.then(res => {
  if(res.data === "Success") {
    window.location.href = "/"
  }
})
.catch(err => console.log(err))
}


  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
           
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
            <button className='signup_btn'>Login</button>
        </form>
        <br></br>
        <p>Not Registered?</p>
        <Link to="/register"><button>Signup</button></Link>
      </div>
        </div>
      )
    }
    
   
    

export default Login
