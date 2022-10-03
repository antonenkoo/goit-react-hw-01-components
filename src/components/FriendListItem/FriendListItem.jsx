import React from 'react';
import styles from './friendsList.module.scss';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  // eslint-disable-next-line no-lone-blocks
  {
    friends.map(friend => {
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
    });
  }
};

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendListItem;
