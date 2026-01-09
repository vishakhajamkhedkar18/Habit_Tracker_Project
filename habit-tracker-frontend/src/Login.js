import { useState } from "react";
import axios from "axios";

function Login({ onAuth }) {
    const [email, setEmail] = useState("");

    const login = () => {
        axios.post(`http://localhost:8080/api/users/login?email=${email}`)
            .then(res => onAuth(res.data))
            .catch(() => alert("User not found"));
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
