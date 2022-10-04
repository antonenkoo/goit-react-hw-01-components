import React, { Component } from 'react';
import styles from './friendsList.module.scss';
import PropTypes from 'prop-types';
import friends from './friends.json';

class FriendListItem extends Component {
  render() {
    return friends.map(friend => {
      console.log(friend);
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
}

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendListItem;
