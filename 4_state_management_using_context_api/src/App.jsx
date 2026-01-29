import { UserProvider } from "./Context/UserContext";
import Profile from "./Component/Profile";

function App() {
  return (
    <UserProvider>
      <h1>Context API</h1>
      <Profile />
    </UserProvider>
  );
}

export default App;
