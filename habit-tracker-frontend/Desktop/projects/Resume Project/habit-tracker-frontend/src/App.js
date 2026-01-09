import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UserForm from "./components/UserForm";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {

    const [user, setUser] = useState(null);
    const [habit, setHabits] = useState([]);

    const loadHabits = () => {
        axios.get('http://localhost:8080/api/habits/user/${user.id}')
            .then(res => setHabits(res.data));
    };

    return(
        <div>
            <h1>Smart Habit Tracker</h1>
            {!user && <UserForm onUserCreated={setUser} />}

            {user && (
                <>
                    <HabitForm userId={user.id} onHabitCreated={loadHabits} />
                    <HabitList habits={habits} refresh={loadHabits} />
                </>
            )}

        </div>
    );
}

export default App;
