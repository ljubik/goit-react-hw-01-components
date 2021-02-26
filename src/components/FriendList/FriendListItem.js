import React from "react";
import style from "./FriendList.module.css";

function FriendList({id, name, avatar, isOnline }) {
  console.log("frendslistItem", avatar, name, isOnline)
  return (
    <li key={id} className={style.item}>
      <span className={isOnline ? style.statOnline : style.statOffline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

export default FriendList;
