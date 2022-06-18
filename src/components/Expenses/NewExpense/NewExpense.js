import React, { useState } from 'react';

import ExpenseForm from './ExprenceForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.addExpense(expenseData);
  }

  const handleOpenForm = () => {
    console.log('yo')
    setIsFormOpen(prevState => !prevState)
  }

  if (!isFormOpen) {
    return (
      <div className='new-expense'>
        <button onClick={handleOpenForm}>Add new expense</button>
      </div>
    )
  } 

  return (
    <div className='new-expense'>
      <ExpenseForm
        handleOpenForm={handleOpenForm}
        onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
  )
}

export default NewExpense;
