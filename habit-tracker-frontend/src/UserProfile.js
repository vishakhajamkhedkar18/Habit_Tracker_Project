
function UserProfile({ user, onLogout }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>

            <h2>User Profile</h2>

            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default UserProfile;
