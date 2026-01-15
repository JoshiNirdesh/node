import { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState([]);
    const [password, setPassword] = useState("");
    return (
        <AppContext.Provider value={{ username, setUsername, email, setEmail, phone, setPhone, address, setAddress, password, setPassword }}>
            {children}
        </AppContext.Provider>
    )
}