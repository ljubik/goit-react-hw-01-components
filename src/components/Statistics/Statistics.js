import React from "react";
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Statistics({title, stats}) {
  console.log(title, stats)

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statlist}>
      {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{
              backgroundColor: randomColor(),
            }}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
