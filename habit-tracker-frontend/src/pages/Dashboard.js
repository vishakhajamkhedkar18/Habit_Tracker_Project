import { useEffect, useState } from "react";
import { getHabitByUser } from "../service/habitService";
import HabitList from "../HabitList";
import HabitForm from "../HabitForm";

function Dashboard({ user }) {

  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHabits = () => {
    setLoading(true);
    getHabitByUser(user.id)
      .then(res => setHabits(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadHabits();
  }, [user.id]);

  if (loading) return <p>Loading habits...</p>;

  return (
    <div>
      <h2>Your Habits</h2>

      {/* ⭐ ADD HABIT FORM */}
      <HabitForm userId={user.id} onHabitAdded={loadHabits} />

      {/* ⭐ EMPTY STATE */}
      {habits.length === 0 ? (
        <p>No habits yet. Start by adding one 🚀</p>
      ) : (
        <HabitList habits={habits} />
      )}
    </div>
  );
}

export default Dashboard;
