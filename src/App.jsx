import React, { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Web3 from 'web3';
import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import SorryPage from './components/SorryPage';

export const UserContext = createContext();
function App() {
  const[pass,setPass]=React.useState(false)

  return (
    <UserContext.Provider value={{value1:[pass,setPass]}}>

   <Routes>
    <Route path='/'element={<Homepage/>}></Route>
    <Route path='/dashboard'  element={pass?<Dashboard></Dashboard>:<SorryPage></SorryPage>}></Route>
   </Routes>
    </UserContext.Provider>
  )
}

export default App
