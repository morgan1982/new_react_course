import React, { useDebugValue, useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  })
  
  const titleChangeHandler = ({ target: { value }}) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        title: value
      }
    })
  }

  const handleAmount = ({target: {value}}) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        amount: value
      }
    })
  }

  const handleDate = ({target: {value}}) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        date: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const {title, amount, date} = userInput;
    const expenseData = {
      title,
      amount: +amount,
      date: date ? new Date(date) : new Date('12/12/12')
    }

    props.onSaveExpenseData(expenseData);
    props.handleOpenForm();

    setUserInput({
      title: '',
      amount: '',
      date: ''
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler} 
            value={userInput.title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min='0.01' 
            step='0.01' 
            onChange={handleAmount}
            value={userInput.amount}  
            />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min='2019-01-01' 
            step='2022-12-31' 
            onChange={handleDate}
            value={userInput.date}
            />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.handleOpenForm}>cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;