import React, { useContext, useState } from 'react';
import './App.css';
import { TransactionContext } from './TransContext';

const Header = () => {
  const { transactions, addTransaction } = useContext(TransactionContext);

  let [newDesc, setDesc] = useState('');
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (e) => {
    e.preventDefault();
    if(Number(newAmount) === 0){
      alert('Add value greater than 0');
      return false;
    }
    addTransaction({
      amount: Number(newAmount),
      description: newDesc,
    });
    setAmount(0);
    setDesc('')
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) 
        income = income + transactions[i].amount;
    }
      return income;
    
  };
const getExpense = () => {
     let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) 
         expense += transactions[i].amount;
    }
      return expense;
    
  };

  return (
    <div className='main-container'>
      <h1 className='text-center'>Expense Tracker</h1>
      <h3>
        YOUR BALANCE <br /> ${getIncome() + getExpense()}
      </h3>

      <div className='expense-container'>
        <h3>  INCOME <br /> ${getIncome()}  </h3>
        <h3> EXPENSE <br /> ${getExpense()} </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className='list-container'>
        {transactions.map((transObj, index) => {
          return (
            <li key={index}>
              <span>{transObj.description}</span>
              <span>
                {transObj.amount > 0 ? `+${transObj.amount}` : transObj.amount}
                {/* {transObj.amount} */}
              </span>
            </li>
          );
        })}
      </ul>
      <h3>Add Transaction</h3>
      <hr />

      <form className='form-container' onSubmit={handleAddition}>
        <label htmlFor='text'>Text</label>
        <br />
        <input type='text' value={newDesc} onChange={(ev) => setDesc(ev.target.value)} required id='text'     placeholder='Enter the description'/>
        <br />
        <br />
        <label htmlFor='amount'>Amount</label> <br />
        <input type='number'  onChange={(ev) => setAmount(ev.target.value)}
          required
          value={newAmount}
          id='amount'
          placeholder='Enter the amount'
        />
        <br />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default Header;
