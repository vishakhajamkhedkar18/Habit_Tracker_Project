import { useState } from "react";
import axios from "axios";

function Signup({ onAuth }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const signup = () => {
        axios.post("http://localhost:8080/api/users/signup", {
            name,
            email
        }).then(res => onAuth(res.data))
            .catch(err => alert(err.response.data.message));
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <button onClick={signup}>Sign Up</button>
        </div>
    );
}

export default Signup;
