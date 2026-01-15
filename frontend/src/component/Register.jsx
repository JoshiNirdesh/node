import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios';

const Register = () => {
    const { username, setUsername, email, setEmail, phone, setPhone, address, setAddress, password, setPassword } = useContext(AppContext);

    const handleClick = async () => {
        try {
            const data = { username, email, phone, password, address, }
            const res = await axios.post("http://localhost:4000/api/v1/auth/register", data)
            console.log(res.data.message)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="text" placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
            <input type="text" placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Register
