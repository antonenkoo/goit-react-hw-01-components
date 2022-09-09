import React from 'react';
import styles from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li className={styles.item} key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
