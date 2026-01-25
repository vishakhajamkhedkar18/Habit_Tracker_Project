import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import HabitForm from "./HabitForm";
import UserProfile from "./UserProfile";
import HabitList from "./HabitList";
import axios from "axios";

function App() {
  const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("user"))
  );

  const [habits, setHabits] = useState([]);

  const loadHabits = () => {
    if (!user) return;
    axios.get(`http://localhost:8080/api/habits/user/${user.id}`)
      .then(res => setHabits(res.data));
  };

  return (
    <div>
      <h1>Smart Habit Tracker</h1>

      {!user && (
        <>
          <Signup onAuth={setUser} />
          <Login onAuth={setUser} />
        </>
      )}

      {user && (
        <>
          <p>Welcome, {user.name}</p>
          <UserProfile user={user} onLogout={() => setUser(null)} />
          <HabitForm userId={user.id} onHabitCreated={loadHabits} />
          <HabitList habits={habits} refresh={loadHabits} />
        </>
      )}
    </div>
  );
}

export default App;
