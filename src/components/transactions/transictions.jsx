import React from 'react';
import styles from './transictions.module.scss';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr className={styles.tr} key={transaction.id}>
              <td className={styles.td}>{transaction.type}</td>
              <td className={styles.td}>{transaction.amount}</td>
              <td className={styles.td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  history: PropTypes.array,
};

export default TransactionHistory;
