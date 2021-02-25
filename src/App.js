import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
// import Frendlist from "./components/FriendList/FriendList";
import Transaction from "./components/TransactionHistory/TransactionHistory";

import user from "./db/user.json";
import transaction from "./db/transactions.json";


function App() {
  return (
    <>
      <Profile user = {user} />
      <Statistics />
      <Transaction transaction= {transaction} />
    </>
  );
}

export default App;
