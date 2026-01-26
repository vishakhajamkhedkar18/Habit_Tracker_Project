import axios from "axios";

function HabitList({ habits }) {

    const markCompleted = (habitId) => {
        axios.post(`http://localhost:8080/api/habits/${habitId}/completed`)
            .then(() => window.location.reload())
            .catch(err => alert(err.response.data.error));
    };

    return (
        <div>
            {habits.map(habit => (
                <div
                    key={habit.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "6px"
                    }}
                >
                    <h4>{habit.name}</h4>
                    <p>Category: {habit.category}</p>
                    <p>Current Streak: 🔥 {habit.currentStreak}</p>

                    <button onClick={() => markCompleted(habit.id)}>
                        Mark Completed
                    </button>
                </div>
            ))}
        </div>
    );
}

export default HabitList;
