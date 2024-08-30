import React from 'react'
import {useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Users from './components/Users'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
         
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} /></Routes>
      </BrowserRouter>
    </div>
  )
}

export default App