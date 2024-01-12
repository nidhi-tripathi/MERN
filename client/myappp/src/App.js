import React, {useEffect,  useState} from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import CreatePost from './CreatePost'
import axios from 'axios'
import { createContext } from 'react'

export const userContext = createContext()

const App = () => {
  const [user, setUser] = useState();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setUser(response.data); // Assuming the user data is in the response.data
      })
      .catch(err => console.log(err));
  }, []);

// useEffect(()=>{
// axios.get('http://localhost:3001/')
// .then(user =>{
//   console.log(user)
// } )
// .catch(err => console.log(err))
// },[])

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route> 
     <Route path="/create" element={<CreatePost/>}></Route> 
         
    </Routes>
    </BrowserRouter>
     </userContext.Provider>
    
  )
}

export default App
