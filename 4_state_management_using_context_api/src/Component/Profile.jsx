import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  return (
    <div className="profile-box">

      <h2>User: {user}</h2>

      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setUser(newName)}>
        Change Name
      </button>

    </div>
  );
}

export default Profile;
