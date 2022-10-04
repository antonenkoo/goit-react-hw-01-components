import Profile from './profile/profile.jsx';
import User from './profile/user.json';

import Statistics from './statistics/statistics.jsx';
import Data from './statistics/data.json';

import FriendList from './friendList/friendList.jsx';

import TransactionHistory from './transactions/transictions.jsx';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div className="main">
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics title="Upload stats" stats={Data} />
      <FriendList />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
