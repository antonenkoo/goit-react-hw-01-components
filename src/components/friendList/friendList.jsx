import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './friendsList.module.scss';

import PropTypes from 'prop-types';

const FriendList = () => {
  return (
    <ul className={styles.friendsList}>
      <FriendListItem />
      
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
