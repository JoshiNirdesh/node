import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'

const App = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App
