import { useState } from "react";
import axios from "axios";

function HabitForm({ userId, onHabitAdded }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("HEALTH");

  const handleSubmit = () => {
    if (!name) {
      alert("Habit name is required");
      return;
    }

    axios.post("http://localhost:8080/api/habits", {
      name,
      category,
      user: { id: userId }
    })
    .then(() => {
      setName("");
      onHabitAdded(); // refresh habit list
    })
    .catch(err => alert(err.response.data.error));
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Add New Habit</h3>

      <input
        placeholder="Habit name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="HEALTH">Health</option>
        <option value="FITNESS">Fitness</option>
        <option value="PRODUCTIVITY">Productivity</option>
        <option value="LEARNING">Learning</option>
        <option value="MINDFULNESS">Mindfulness</option>
      </select>

      <button onClick={handleSubmit}>Add Habit</button>
    </div>
  );
}

export default HabitForm;
