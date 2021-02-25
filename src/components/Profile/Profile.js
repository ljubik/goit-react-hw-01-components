import React from "react";
import style from "./Profile.module.css";


function Profile({ user }) {

  return (
  <div className={style.profile}>
    <div className="description">
      <img
        src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
        alt="user avatar"
        className="avatar"
      />
      <p className="name">Petra Marica</p>
      <p className="tag">@pmarica</p>
      <p className="location">Salvador, Brasil</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
  );
}

export default Profile;
