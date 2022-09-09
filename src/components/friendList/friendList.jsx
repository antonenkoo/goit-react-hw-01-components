import React from 'react';
import styles from './friendsList.module.scss';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => {
        return (
          <li className={styles.friendsList_item} key={friend.id}>
            <span
              className={`${styles.status} ${
                friend.isOnline ? styles.online : styles.offline
              }`}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
