import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'

const App = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    )
}

export default App
