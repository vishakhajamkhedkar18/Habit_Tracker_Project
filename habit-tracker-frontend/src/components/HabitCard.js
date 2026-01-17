import {useState} from "react";
import {completeHabit, getAnalytics} from "../service/habitService";
import AnalyticsPanel from "./AnalyticsPanel";

function HabitCard({ habit }){

    const [analytics, setAnalytics] = useState(null);
    const [message, setMessage] = useState("");

    const handleComplete = () => {
        completeHabit(habit.id)
            .then(res => {setMessage(res.data.message);
                                            return getAnalytics(habit.id);})

            .then(res => setAnalytics(res.data))
            .catch(err => alert(err.message));

    };

    return(
        <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <h3>{habit.name}</h3>
            <p>Streak: {habit.currentStreak}</p>

            <button onClick={handleComplete}>Mark Completed</button>

            {message && <p>{message}</p>}

            {analytics && <AnalyticsPanel analytics={analytics} />}
        </div>
    );
}

export default HabitCard;