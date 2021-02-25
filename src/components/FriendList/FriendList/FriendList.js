import React from "react";
import FrendListItem from "../FriendListItem/FriendListItem";
import frendsdb from "../../../db/frends.json";

function FriendList({ frendsdb }) {

  return (
    <div>
      <h1>FriendList</h1>
      <FrendListItem  frends = {frendsdb}/>
    </div>
  );
}

export default FriendList;
