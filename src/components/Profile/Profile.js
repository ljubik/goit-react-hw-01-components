import React from "react";
import style from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({name, tag, location, avatar, stats}) {

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="user avatar"
          className={style.avatar}
        />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.list}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.list}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.list}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  name: "Anonymus",
  tag: "unique",
  location: "Erth",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg",
  stats: {
    followers: 0,
    views: 0,
    likes: 0
  }
};


Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};