import { useSelector } from "react-redux";

function Dashboard() {
    const { user_profile } = useSelector(state => state.auth.payload);

    return (
        <h3>{user_profile.full_name}</h3>
    );
}

export default Dashboard;
