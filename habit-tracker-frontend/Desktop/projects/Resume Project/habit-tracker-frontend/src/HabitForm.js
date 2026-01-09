import { useState } from "react";
import axios from "axios";

function HabitForm({ userId, onHabitCreated }) {
    const [name, setName] = useState("");

    const createHabit = () => {
        axios.post("http://localhost:8080/api/habits", {
            name,
            user: { id: userId }
        }).then(res => {
            onHabitCreated(res.data);
            setName("");
        });
    };

    return (
        <div>
            <h2>Create Habit</h2>
            <input placeholder="Habit Name"
                   value={name}
                   onChange={e => setName(e.target.value)} />
            <button onClick={createHabit}>Add Habit</button>
        </div>
    );
}

export default HabitForm;