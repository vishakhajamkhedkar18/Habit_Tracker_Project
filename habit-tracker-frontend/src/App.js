import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./Auth.css";

function App() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [mode, setMode] = useState("login");

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    if (!user) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Smart Habit Tracker</h2>

                    <div className="auth-tabs">
                        <button
                            className={mode === "login" ? "active" : ""}
                            onClick={() => setMode("login")}
                        >
                            Login
                        </button>
                        <button
                            className={mode === "signup" ? "active" : ""}
                            onClick={() => setMode("signup")}
                        >
                            Sign Up
                        </button>
                    </div>

                    {mode === "login" ? (
                        <Login setUser={setUser} />
                    ) : (
                        <Signup setUser={setUser} />
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Smart Habit Tracker</h1>
            <p>
                Welcome, <strong>{user.name}</strong>
                <button onClick={logout} style={{ marginLeft: 10 }}>
                    Logout
                </button>
            </p>

            <Dashboard user={user} />
        </div>
    );
}

export default App;
