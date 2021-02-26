import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Frendlist from "./components/FriendList/FriendList";
import Transaction from "./components/TransactionHistory/TransactionHistory";

import userDB from "./db/user.json";
import statisticalDataDB from "./db/statistical-data.json";
import frendslistDB from "./db/frends.json";
import transactionDB from "./db/transactions.json";


function App() {
  return (
    <>
      <Profile
        name={userDB.name}
        tag={userDB.tag}
        location={userDB.location}
        avatar={userDB.avatar}
        stats={userDB.stats}
      />
      <Statistics stats={statisticalDataDB} title="Upload stats" />
      <Frendlist frendslist={frendslistDB}/>
      <Transaction transaction={transactionDB} />
    </>
  );
}

export default App;
