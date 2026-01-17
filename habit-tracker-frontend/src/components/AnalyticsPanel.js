function AnalyticsPanel({ analytics }) {
    return (
        <div style={{ marginTop: 10 }}>
            <p>Weekly Completions: {analytics.weeklyCompletions}</p>
            <p>Monthly Completions: {analytics.monthlyCompletions}</p>
            <p>Completion %: {analytics.completionPercentage.toFixed(1)}%</p>
            <p>Longest Streak: {analytics.longestStreak}</p>
        </div>
    );
}

export default AnalyticsPanel;
