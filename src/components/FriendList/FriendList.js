import React from "react";
import FrendListItem from "./FriendListItem.js";
// import {avatar, name, isOnline} from "../../../db/frends.json";
import style from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ frendslist }) {
// const {avatar, name, isOnline} = frendslist;

  return (
    <ul className={style.friendList}>
      {frendslist.map(friend => {
        return (
          <FrendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
