import React from 'react'

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpenseList = props => {
  
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return <ul className='expenses-list'>
      {props.items.map(({id, title, amount, date}) => (
      <ExpenseItem
        key={id}
        title={title}
        amount={amount}
        date={date}
      />))}
  </ul>
}

export default ExpenseList;
