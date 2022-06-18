import React, { useState } from 'react'
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const INIT_EXPENSES = [
  { id: '1', title: 'Car Insuranse', amount: 294.4, date: new Date(2021, 2, 28)},
  { id: '23', title: 'SuperMarket', amount: 300, date: new Date(2021, 2, 29)},
  { id: '24', title: 'Taxes', amount: 500, date: new Date(2021, 3, 28)},
  { id: '45', title: 'Toys', amount: 25, date: new Date(2021, 3, 10)}
]

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpense = expense => {
    setExpenses(prevExpenses => {
      return [
        expense,
        ...prevExpenses
      ]
    });
  }


  return (
    <div className="App">
      <NewExpense addExpense={addExpense}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
