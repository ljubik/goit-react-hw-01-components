import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Transaction from "./components/TransactionHistory/TransactionHistory";
import Frendlist from "./components/FriendList/FriendList";
import user from "./db/user.json";


function App() {
  return (
    <>
      <Profile user = {user} />
      <Statistics />
    </>
  );
}

export default App;
