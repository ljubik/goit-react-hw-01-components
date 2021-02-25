import "./App.css";
import Profile from "./components/Profile/Profile";

import user from "./db/user.json";


function App() {
  return (
    <>
      <Profile user = {user} />
    </>
  );
}

export default App;
