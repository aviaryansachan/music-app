import { Routes, Route } from 'react-router'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Gsong from './Gsong'
import { useState } from 'react'
import Dsong from './Dsong'
import Ksong from './Ksong'
import Hsong from './Hsong'

function App() {

   const[username,setUserName]=useState();

    const handlelogin=(name)=>{
        setUserName(name)
    }
  return(
    <>
      <Routes>
        <Route  element={<NavBar />}> 
        <Route path='/'  element={<Home homename={username} />}/> 
        <Route path='/login'  element={<Login onSubmit={handlelogin} />}/> 
        </Route>
        <Route  path='/g' element={<Gsong />}/>
        <Route  path='/d' element={<Dsong />}/>
        <Route  path='/k' element={<Ksong />}/>
        <Route  path='/h' element={<Hsong />}/>
      </Routes>
    </>
  )
}

export default App;
