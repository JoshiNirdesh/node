import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Register = () => {
    const { username, setUsername, email, setEmail, phone, setPhone, address, setAddress, password, setPassword } = useContext(AppContext);


    return (
        <div>
            <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <input type="email" placeholder='Enter your email' /><br />
            <input type="number" placeholder='Enter your phone number' /><br />
            <input type="text" placeholder='Enter your address' /><br />
            <input type="password" placeholder='Enter your password' /><br />
            <button>Submit</button>
        </div>
    )
}

export default Register
