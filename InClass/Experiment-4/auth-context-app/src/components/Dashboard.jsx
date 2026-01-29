import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userName, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {userName}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
