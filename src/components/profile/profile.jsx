import React from 'react';
import styles from './profile.module.scss';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={`${styles.name} ${styles.normal}`}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.block}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.block}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.block}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
export default Profile;
