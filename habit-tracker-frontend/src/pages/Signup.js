import { useState } from "react";
import { signup } from "../service/authService";

function Signup({ setUser }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        signup(form)
            .then(res => {
                setUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
            })
            .catch(err => {
                alert(err?.response?.data?.error || "Signup failed");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign up"}
            </button>
        </form>
    );
}

export default Signup;
