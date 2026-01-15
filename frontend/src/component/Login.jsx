import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios';

const Login = () => {
    const { email, setEmail, password, setPassword } = useContext(AppContext);

    const handleClick = async () => {
        try {
            const data = { email, password }
            const res = await axios.post("http://localhost:4000/api/v1/auth/login", data);
            console.log(res.data.message)

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter you password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login
