import { useState } from "react";
import { login } from "../service/authService";

function Login({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); // 🔥 VERY IMPORTANT
        setLoading(true);
        // call login API here

    login({ email, password })
      .then(res => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch(err => {
        alert(err.response?.data?.error || "Login failed");
      })
      .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
