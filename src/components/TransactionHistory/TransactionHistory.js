import React from "react";
import style from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';


function TransactionHistory({transaction}) {
  // const{id, type, amount, currency} = transaction;
console.log(transaction);
console.log(typeof(transaction));
  return (
  
        <table className={style.transactionHistory}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody className={style.tbody}>
          {transaction.map(trans => 
         (<tr key={trans.id}>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
          </tr>)
          )}
          </tbody>
        </table>

  );
};

TransactionHistory.defaultProps = {
  id: "null",
  type: "Undefined",
  amount: "confidential",
  currency: "unique",
  
};

TransactionHistory.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};


export default TransactionHistory;
