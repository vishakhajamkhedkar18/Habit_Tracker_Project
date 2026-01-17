import HabitCard from "./HabitCard";

function HabitList({ habits }) {
    return (
        <div>
            {habits.map(habit => (
                <HabitCard key={habit.id} habit={habit} />
            ))}
        </div>
    );
}

export default HabitList;
