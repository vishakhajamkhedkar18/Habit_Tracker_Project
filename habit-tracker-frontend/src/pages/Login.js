import { useState } from "react";
import { login } from "../services/authService";

function Login({ setUser }) {

    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = () => {
        login(form)
            .then(res => {
                setUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
            })
            .catch(err => alert(err.response.data.error));
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;
