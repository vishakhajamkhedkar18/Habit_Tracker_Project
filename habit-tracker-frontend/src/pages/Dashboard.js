import {useEffect, useState} from "react";
import {getHabitByUser} from "../service/habitService";
import HabitList from "../components/HabitList";

function Dashboard({user}){

    const[habits, setHabits] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        getHabitByUser(user.id)
            .then(res => setHabits(res.data))
            .finally(() => setLoading(false));

    },[user.id]);

    if (loading) return <p>Loading habits...</p>

    return (
        <div>
            <h2>Your Habits</h2>
            <HabitList habits={habits} />
        </div>
    );
}

export default Dashboard;