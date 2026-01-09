import axios from "axios";

function HabitList({ habits, refresh }) {

    const completeHabit = (id) => {
        // eslint-disable-next-line no-template-curly-in-string
        axios.post(`http://localhost:8080/api/habits/${id}/completed`)
            .then(refresh);
    };

    return (
        <div>
            <h2>Habits</h2>
            <ul>
                {habits.map(h => (
                    <li key={h.id}>
                        {h.name} | Streak: {h.currentStreak}
                        <button onClick={() => completeHabit(h.id)}>
                            Complete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HabitList;
